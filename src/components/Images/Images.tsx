import { useEffect, useState } from "react";
import { collection, getDocs, query, deleteDoc, doc } from "firebase/firestore";
import {
  firebaseAuth,
  firebaseFirestore,
  firebaseStorage,
} from "../../firebase/firebaseConfig";
import { ref, deleteObject } from "firebase/storage";
import { FiLink } from "react-icons/fi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { IoIosShareAlt } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { Div, IconButton, MasonryItem, Overlay } from "./Style";
import NavBar from "../NavBar/NavBar";

export default function Images() {
  const [images, setImages] = useState<
    { id: string; uniqueId: string; url: string }[]
  >([]);
  const currentUser = firebaseAuth.currentUser;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        let imageCollectionPath = "images";
        if (currentUser) {
          imageCollectionPath = `users/${currentUser.uid}/images`;
        }

        const q = query(collection(firebaseFirestore, imageCollectionPath));
        const querySnapshot = await getDocs(q);

        const imageList: { id: string; uniqueId: string; url: string }[] = [];
        querySnapshot.forEach((doc) => {
          const { uniqueId, url } = doc.data();
          imageList.push({ id: doc.id, uniqueId, url });
        });

        setImages(imageList);
      } catch (error) {
        console.error("Error fetching images: ", error);
      }
    };

    fetchImages();
  }, [currentUser]);

  const handleDelete = async (id: string, url: string) => {
    try {
      let imageCollectionPath = "images";
      if (currentUser) {
        imageCollectionPath = `users/${currentUser.uid}/images`;
      }
      const imageDocRef = doc(firebaseFirestore, imageCollectionPath, id);
      await deleteDoc(imageDocRef);

      const imageRef = ref(firebaseStorage, url);
      await deleteObject(imageRef);

      setImages(images.filter((image) => image.id !== id));
    } catch (error) {
      console.error("Error deleting image: ", error);
    }
  };

  const handleShare = async (url: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out this image!",
          text: "Here's an image I'd like to share with you.",
          url,
        });
      } catch (error) {
        console.error("Error sharing the image: ", error);
      }
    } else {
      navigator.clipboard.writeText(url);
      alert("Image URL copied to clipboard!");
    }
  };

  const handleDownload = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = "image.jpg";
    link.click();
  };

  return (
    <>
      <NavBar />
      <Div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry gutter="10px">
            {images.length > 0 ? (
              images.map((image, index) => (
                <MasonryItem key={index}>
                  <img
                    style={{zIndex: -1}}
                    src={image.url}
                    alt={`Uploaded Image ${index}`}
                  />

                  {/* Hover icons */}
                  <Overlay className="overlay">
                    <div>
                      <p>Unique ID: {image.uniqueId}</p>
                    </div>
                    <div>
                      <IconButton
                        onClick={() => handleDelete(image.id, image.url)}
                      >
                        <MdDelete />
                      </IconButton>
                      <IconButton onClick={() => handleShare(image.url)}>
                        <IoIosShareAlt />
                      </IconButton>
                      <IconButton onClick={() => handleDownload(image.url)}>
                        <FiLink />
                      </IconButton>
                    </div>
                  </Overlay>
                </MasonryItem>
              ))
            ) : (
              <p>No images uploaded yet.</p>
            )}
          </Masonry>
        </ResponsiveMasonry>
      </Div>
    </>
  );
}
