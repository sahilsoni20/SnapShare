import toast from "react-hot-toast";
import { useImageStore } from "../../hook/useImageStore";
import { useState } from "react";

export function ImageDownloader() {
  const [id, setId] = useState<string>("");
  const images = useImageStore((state) => state.images);

  const handleDownloadImage = () => {
    const imageData = images[id];
    
    if (imageData) {
      const currentTime = Date.now()
      const timeExpiry = currentTime - imageData.timestamp
       
      if(timeExpiry < 5 * 60 * 1000) {
        const link = document.createElement('a')
        link.href = imageData.image
        link.download = `download image ${id}.png`
        link.click()
      } else {
        toast.error("The image has been expired!!")
      }
    } else {
      toast.error("Invalid or expired code!!");
    }
  };

  return (
    <div className="image-downloader">
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Enter given code to download image..."
      />
      <button onClick={handleDownloadImage}>Download</button>
    </div>
  );
}
