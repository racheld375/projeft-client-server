import React, { useState } from 'react'
import axios from 'axios';
import UserUpdate from './UserUpdate';

const UsersItem = ({user,fechUsers}) => {
const[flag,setFlag]=useState(false)

    const deletewone=async()=>{
        const {data}= await axios.delete("http://localhost:7500/ContentManager/users/",{data:{id:user._id}})
        fechUsers()
    }

  return <div>
  <h2>{user.name}</h2>
  <p>{user.username}</p>
  <p>{user.email}</p>
  <p>{user.address}</p>
  <p>{user.phone}</p>
  <button onClick={()=>{deletewone()}}>delete</button>
  <button onClick={()=>{setFlag(true)}}>update</button>
  { flag && <UserUpdate user={user} fechUsers={fechUsers} setFlag={setFlag} />}
  </div>
}

export default UsersItem