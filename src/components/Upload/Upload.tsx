import { useCallback, useState } from "react";
import { useUploadStore } from "../../hooks/useUploadStore";
import toast from "react-hot-toast";
import { useDropzone } from "react-dropzone";
import { UniqueId } from "../../utils/helper";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  firebaseFirestore,
  firebaseStorage,
} from "../../firebase/firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { IoCloudUploadOutline } from "react-icons/io5";
import {
  Button,
  Copy,
  Data,
  DataInt,
  Id,
  ImgName,
  UploadContainer,
  UploadFun,
  Url,
} from "./Style";
import { GoCopy } from "react-icons/go";

export default function Upload() {
  const { images, setImages } = useUploadStore();
  const [uploading, setUploading] = useState(false);
  const [uploadedData, setUploadedData] = useState<
    { uniqueId: string; url: string }[]
  >([]);

  const onDrop = useCallback(
    (acceptedImages: File[]) => {
      if (images.length + acceptedImages.length <= 5) {
        setImages([...images, ...acceptedImages]);
      } else {
        toast.error("You can upload a maximum of 5 images.");
      }
    },
    [images, setImages]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    maxFiles: 5,
    accept: {
      "image/*": [],
    },
    multiple: true,
  });

  const handleUpload = async () => {
    if (images.length === 0) return;

    setUploading(true);

    try {
      const uploadPromises = images.map((image) => {
        return new Promise<void>((resolve, reject) => {
          const uniqueId = UniqueId(); // Generate a new uniqueId for each image
          const storageRef = ref(
            firebaseStorage,
            `images/${uniqueId}-${image.name}`
          );

          const uploadTask = uploadBytesResumable(storageRef, image);

          uploadTask.on(
            "state_changed",
            () => {},
            (error) => {
              console.error("Error uploading image: ", error);
              toast.error(`Failed to upload ${image.name}`);
              reject(error);
            },
            async () => {
              try {
                const downloadUrl = await getDownloadURL(
                  uploadTask.snapshot.ref
                );
                await addDoc(collection(firebaseFirestore, "images"), {
                  uniqueId,
                  url: downloadUrl,
                  uploadAt: Date.now(),
                });

                // Add the uploaded data to state and remove it after 5 minutes
                setUploadedData((prevData) => [
                  ...prevData,
                  { uniqueId, url: downloadUrl },
                ]);

                // Set timeout to remove the link and code after 5 minutes
                setTimeout(() => {
                  setUploadedData((prevData) =>
                    prevData.filter((data) => data.uniqueId !== uniqueId)
                  );
                }, 300000); // 300,000 ms = 5 minutes

                toast.success(`${image.name} uploaded successfully`);
                resolve();
              } catch (firestoreError) {
                console.error(
                  "Error adding document to Firestore: ",
                  firestoreError
                );
                toast.error(`Failed to store ${image.name} in Firestore`);
                reject(firestoreError);
              }
            }
          );
        });
      });

      await Promise.all(uploadPromises); // Wait for all images to upload
    } catch (error) {
      console.error("Error during upload: ", error);
      toast.error("Error uploading images");
    } finally {
      setUploading(false);
      setImages([]); // Clear images after upload
    }
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy text: ", error);
      toast.error("Failed to copy text.");
    }
  };

  return (
    <UploadContainer>
      <UploadFun>
        <div {...getRootProps()} className="upload-area">
          <input {...getInputProps()} />
          <h1>File Upload</h1>
          <IoCloudUploadOutline
            size={120}
            color="#c4a489"
            style={{ marginBottom: "1rem" }}
            className="upload-icon"
          />
          <p>
            Drag & drop or <br /> Click to browse
          </p>
        </div>
        <Button
          onClick={handleUpload}
          disabled={uploading || images.length === 0}
        >
          {uploading ? "Uploading..." : "Upload"}
        </Button>
      </UploadFun>

      <div>
        {images.map((image, index) => (
          <ImgName key={index}>{image.name}</ImgName>
        ))}
      </div>

      <Data>
        {uploadedData.map((data, index) => (
          <DataInt key={index}>
            <Url>
              Link:-{" "}
              <a href={data.url} target="_blank" rel="noopener noreferrer">
                {data.url}
              </a>
              <Copy onClick={() => handleCopy(data.url)}>
                <GoCopy size={12} className="copy-icon"/>
              </Copy>
            </Url>
            <Id>
              Unique Code: <code>{data.uniqueId}</code>
              <Copy onClick={() => handleCopy(data.uniqueId)}>
                <GoCopy size={12} className="copy-icon"/>
              </Copy>
            </Id>
          </DataInt>
        ))}
      </Data>
    </UploadContainer>
  );
}
