import { useEffect,useState} from "react"
import Axios from "axios"
import { Link } from 'react-router-dom'
import PostsItem from './PostsItem'

const PostsList = () => {
const [posts,setPosts] =useState([])
    const[search,setSearch]=useState("")
    // const[top,setStop]=useState(false)
    const fechPosts= async ()=>{
        const{data}=await Axios.get("http://localhost:7500/ContentManager/posts/")
        setPosts(data)
    }
    // const topPosts= async ()=>{
    //     const{data}=await Axios.get("http://localhost:7500/ContentManager/posts/top")
    //     setPosts(data)
    // }

    useEffect(()=>{
        fechPosts()
    },[])

    if(posts.length===0) return <h2>loading</h2>

  return <>
  <Link to="/posts/Add">add post</Link>
    <input value={search} placeholder="search" onChange={(e) => (setSearch(e.target.value))} />
    {/* <label> <input type="checkbox" checked={top} onChange={topPosts} />Top 10</label> */}
  {posts.filter((t)=> t.title.includes(search)).map((post,index)=>{
    return <PostsItem post={post} fechPosts={fechPosts}/>}
    )}
  </>
}

export default PostsList