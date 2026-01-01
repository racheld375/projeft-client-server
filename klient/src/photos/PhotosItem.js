import React, { useState } from 'react'
import axios from 'axios';
import PhotosUpdate from './PhotosUpdate';

const PhotosItem = ({photo,fechPhotos}) => {
    const[flag,setFlag]=useState(false)

    const deletewone=async()=>{
        const {data}= await axios.delete("http://localhost:7500/ContentManager/photos/",{data:{id:photo._id}})
        fechPhotos()
    }

  return <div>
  <h2>{photo.title}</h2>
  {console.log(photo.imageUrl)}
    <img src={`/images/${photo.imageUrl}`} onError={() => console.log("❌ image not found:", photo.imageUrl)} alt={photo.title} style={{ width: "200px", borderRadius: "10px" }} />
  <button onClick={()=>{deletewone()}}>delete</button>
  <button onClick={()=>{setFlag(true)}}>update</button>
  { flag && <PhotosUpdate photo={photo} fechPhotos={fechPhotos} setFlag={setFlag} />}
  </div>
}

export default PhotosItem