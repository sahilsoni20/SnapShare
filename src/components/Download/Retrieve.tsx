import { useState } from "react";
import { firebaseFirestore } from "../../firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";
import { Button, DownloadCont, Input, Retrieve } from "./Style";
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
      const docRef = doc(firebaseFirestore, "images", uniqueId); // Use uniqueId to get the document
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setImageUrl(docSnap.data().url); // Get the URL from Firestore
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
        <div>
          <h3>Image Found:</h3>
          <img
            src={imageUrl}
            alt="Fetched"
            style={{ maxWidth: "300px", maxHeight: "300px" }}
          />
          <p>
            Download Link:{" "}
            <a href={imageUrl} target="_blank" rel="noopener noreferrer">
              {imageUrl}
            </a>
          </p>
        </div>
      )}
    </Retrieve>
  );
}
