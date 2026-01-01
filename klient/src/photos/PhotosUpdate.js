import  { useState } from 'react'
import axios from 'axios';

const PhotosUpdate = ({photo,fechPhotos,setFlag}) => {
 const[values,setValue]=useState({
        title:photo.title,
        imageUrl:photo.imageUrl
    })

    const submitForm=async(e)=>{
        e.preventDefault()
        const {data}= await axios.put("http://localhost:7500/ContentManager/photos/",{id:photo._id,title:values.title,imageUrl:values.imageUrl})
    fechPhotos()
    setFlag(false)
    
    }

  return <form onSubmit={submitForm}>
    <input value={values.title} placeholder={values.title} onChange={(e)=>setValue(prev => ({...prev,title: e.target.value}))}  />
    <input value={values.imageUrl} placeholder={values.imageUrl} onChange={(e) => setValue(prev => ({ ...prev, imageUrl: e.target.value }))} />
    <button  type='submit'>send</button>
  </form>
}

export default PhotosUpdate