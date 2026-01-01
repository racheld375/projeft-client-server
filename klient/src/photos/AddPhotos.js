import  { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPhotos = () => {
    const[values,setValue]=useState({
        title:"",
        imageUrl:""
    })
    const naviage= useNavigate()
    const submitForm=async(e)=>{
        e.preventDefault()
        const {data}= await axios.post("http://localhost:7500/ContentManager/photos/",{title:values.title,imageUrl:values.imageUrl})
        setValue({
        title:"",
        imageUrl:""
    })
    naviage("/photos")
    }

  return <>
  
  <form onSubmit={submitForm}>
    <input value={values.title} placeholder="enter a title" onChange={(e)=>setValue(prev => ({...prev,title: e.target.value}))}  />
    <input value={values.imageUrl} placeholder="enter url" onChange={(e) => setValue(prev => ({ ...prev, imageUrl: e.target.value}))} />
    <button disabled={values.imageUrl===""} type='submit'>send</button>
  </form>
  
  </>
}

export default AddPhotos