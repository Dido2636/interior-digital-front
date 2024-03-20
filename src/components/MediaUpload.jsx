import React, { useState } from "react";
import axios from "axios";

function MediaUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setimageUrl] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };
  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", selectedImage);
    try {
      const response = await axios.post(
        "http://localhost:7890/upload",
        formData,
        { headers: { "Content-Type": "multipart/formdata" } }
      );
      console.log("Image Uploaded:", response.data.imageUrl);
      setimageUrl(response.data.imageUrl);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <>
      <h1>VOTRE ESPACE DECO</h1>
      <div>
        
       {/* lorsque je tente de poster mon fichier (formulaire +image), cela ne s'affiche pas */}
       
        <form action="/create-media" method="post" enctype="multipart/form-data" className="form-user">
        <input className="input-field" type="Titre" placeholder="text"></input>
        <input
          className="input-field"
          type="text"
          placeholder="Description"
        ></input>
        <input type="file" name="mediaType"></input>
         <button type="submit">Poster fichier</button>
        </form>


        
        
      </div>
    </>
  );
}
export default MediaUpload;

{/* <input type="file" name="image" onChange={handleImageChange} />
{imageUrl && <img src={imageUrl} />}
<button onClick={handleUpload}>Upload Image</button> */}