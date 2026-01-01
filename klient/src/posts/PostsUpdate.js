import  { useState } from 'react'
import axios from 'axios';

const PostsUpdate = ({post,fechPosts,setFlag}) => {
 const[values,setValue]=useState({
        title:post.title,
        body:post.body
    })
    const submitForm=async(e)=>{
        e.preventDefault()
        const {data}= await axios.put("http://localhost:7500/ContentManager/posts/",{id:post._id,title:values.title,body:values.body})
    fechPosts()
    setFlag(false)
    
    }
  return <form onSubmit={submitForm}>
    <input value={values.title} placeholder={values.title} onChange={(e)=>setValue(prev => ({...prev,title: e.target.value}))}  />
    <input value={values.body} placeholder={values.body} onChange={(e) => setValue(prev => ({ ...prev, body: e.target.value }))} />
    <button  type='submit'>send</button>
  </form>
}

export default PostsUpdate