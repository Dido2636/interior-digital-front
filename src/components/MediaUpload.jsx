import React, { useState } from "react";
import axios from "axios";

function MediaUpload() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaUrls, setmediaUrls] = useState(null);

  const handleMediaChange = (e) => {
    setSelectedMedia(e.target.files);
  };
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("mediaType", selectedMedia);
    try {
      const response = await axios.post(
        "http://localhost:7890/upload",
        formData,
        { headers: { "Content-Type": "multipart/formdata" } }
      );
      console.log("Media Uploaded:", response.data.mediaUrls);
      setmediaUrls(response.data.mediaUrls);
    } catch (error) {
      console.error("Error uploading media:", error);
    }
  };
  return (
    <div>
      <input type="file" name="image" onChange={handleMediaChange} multiple />

      {imageUrl && <img src={imageUrl} />}
      {/* {mediaUrls.map((url, index) => (
        <img key={index} src={url} alt={`media-${index}`} />
      ))} */}
      <button onClick={handleUpload}>Upload Image</button>
    </div>
  );
}
export default MediaUpload;
