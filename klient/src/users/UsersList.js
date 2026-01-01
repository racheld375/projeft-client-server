import React from 'react'
import { useEffect,useState} from "react"
import Axios from "axios"
import { Link } from 'react-router-dom'
import UsersItem from './UsersItem'


const UsersList = () => {
const [users,setUsers] =useState([])
    // const[search,setSearch]=useState("")

    const fechUsers= async ()=>{
        const{data}=await Axios.get("http://localhost:7500/ContentManager/users/")
        setUsers(data)
    }

    useEffect(()=>{
        fechUsers()
    },[])

    if(users.length===0) return <h2>loading</h2>

  return <>
  <Link to="/users/Add">add user</Link>
    {/* <input value={search} placeholder="search" onChange={(e) => (setSearch(e.target.value))} /> */}
  { users //.filter((t)=> t.title.includes(search))
    .map((user,index)=>{
    return <UsersItem user={user} fechUsers={fechUsers}/>}
    )}
  </>
}

export default UsersList