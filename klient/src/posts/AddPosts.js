import  { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPosts = () => {
    const[values,setValue]=useState({
        title:"",
        body:""
    })
    const naviage= useNavigate()
    const submitForm=async(e)=>{
        e.preventDefault()
        const {data}= await axios.post("http://localhost:7500/ContentManager/posts/",{title:values.title,body:values.body})
        setValue({
        title:"",
        body:""
    })
    naviage("/posts")
    }

  return <>
  
  <form onSubmit={submitForm}>
    <input value={values.title} placeholder="enter a title" onChange={(e)=>setValue(prev => ({...prev,title: e.target.value}))}  />
    <input value={values.body} placeholder="enter body" onChange={(e) => setValue(prev => ({ ...prev, body: e.target.value}))} />
    <button disabled={values.title===""} type='submit'>send</button>
  </form>
  
  </>
}

export default AddPosts