import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useImageStore } from "../../hook/useImageStore";
import toast from "react-hot-toast";
import { FileUploader } from "react-drag-drop-files";

export function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { uploadImage } = useImageStore();
  const fileTypes = ["JPG", "PNG"];

  // Handle file selection
  const handleImage = (file: File) => {
    setSelectedImage(file);
  };

  // Handle file upload to Zustand
  const handleUploadImage = () => {
    if (selectedImage) {
      const reader = new FileReader();
      const uniqueID = uuidv4().substring(0, 8);

      reader.onloadend = () => {
        if (reader.result) {
          uploadImage(uniqueID, reader.result as string);  // Add image to Zustand store
          toast.success(`Image uploaded successfully! \n Your code is ${uniqueID}`);
          toast.success("The code will expiry in 5 minutes")
        } else {
          toast.error("Failed to read the file");
        }
      };
      reader.readAsDataURL(selectedImage);  // Read the image file as a Data URL
    } else {
      toast.error("No file selected");
    }
  };

  return (
    <div className="image-uploader">
      <FileUploader handleChange={handleImage} name="file" types={fileTypes} />
      {selectedImage && <p>Selected file: {selectedImage.name}</p>}
      <button onClick={handleUploadImage} disabled={!selectedImage}>
        Upload Image
      </button>
    </div>
  );
}
