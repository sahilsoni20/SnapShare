import { useState } from "react";
import { firebaseFirestore } from "../../firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import toast from "react-hot-toast";
import { Button, DownloadCont, ImageUrl, Input, Retrieve } from "./Style";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { getAuth } from "firebase/auth"; // Import Firebase auth

export default function DownloadImage() {
  const [uniqueId, setUniqueId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  // Initialize Firebase Auth and get current user
  const auth = getAuth();
  const currentUser = auth.currentUser;

  const handleFetchImage = async () => {
    if (!uniqueId) {
      toast.error("Please enter a unique code.");
      return;
    }

    setLoading(true);
    try {
      // Check if the user is signed in or not
      const userPath = currentUser
        ? `users/${currentUser.uid}/images`
        : "publicImages";

      const q = query(
        collection(firebaseFirestore, userPath),
        where("uniqueId", "==", uniqueId)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        setImageUrl(doc.data().url);
        toast.success("Image found!");
      } else {
        setImageUrl("");
        toast.error("No image found with that code.");
      }
    } catch (error) {
      console.error("Error fetching image: ", error);
      toast.error("Error fetching image.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Retrieve>
      <h1>Image Download</h1>

      <DownloadCont>
        <IoCloudDownloadOutline className="download-icon" />
        <Input
          type="text"
          placeholder="Enter Unique Code"
          value={uniqueId}
          onChange={(e) => setUniqueId(e.target.value)}
        />
        <Button onClick={handleFetchImage} disabled={loading}>
          {loading ? "Fetching..." : "Fetch Image"}
        </Button>
      </DownloadCont>

      {imageUrl && (
        <ImageUrl>
          <h4>Image URL is ready: </h4>
          <a href={imageUrl} download target="_blank" rel="noopener noreferrer">
            Click here
          </a>
        </ImageUrl>
      )}
    </Retrieve>
  );
}
