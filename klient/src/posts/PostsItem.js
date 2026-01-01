import React, { useState } from 'react'
import axios from 'axios';
import PostsUpdate from './PostsUpdate';

const PostsItem = ({post,fechPosts}) => {
    const[flag,setFlag]=useState(false)

    const deletewone=async()=>{
        const {data}= await axios.delete("http://localhost:7500/ContentManager/posts/",{data:{id:post._id}})
        fechPosts()
    }

  return <div>
  <h2>{post.title}</h2>
  <p>{post.body}</p>
  <button onClick={()=>{deletewone()}}>delete</button>
  <button onClick={()=>{setFlag(true)}}>update</button>
  { flag && <PostsUpdate post={post} fechPosts={fechPosts} setFlag={setFlag} />}
  </div>
}

export default PostsItem