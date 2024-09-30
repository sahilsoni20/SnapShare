import { useState } from "react";
import { firebaseFirestore } from "../../firebase/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import toast from "react-hot-toast";
import { Button, DownloadCont, ImageUrl, Input, Retrieve } from "./Style";
import { IoCloudDownloadOutline } from "react-icons/io5";

export default function DownloadImage() {
  const [uniqueId, setUniqueId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetchImage = async () => {
    if (!uniqueId) {
      toast.error("Please enter a unique code.");
      return;
    }

    setLoading(true);
    try {
      // Query the Firestore collection to find the document with the matching uniqueId field
      const q = query(
        collection(firebaseFirestore, "images"),
        where("uniqueId", "==", uniqueId)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Get the first matching document (assuming uniqueId is unique)
        const doc = querySnapshot.docs[0];
        setImageUrl(doc.data().url); // Get the URL from Firestore
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
