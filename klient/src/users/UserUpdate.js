import  { useState } from 'react'
import axios from 'axios';

const UserUpdate = ({user,fechUsers,setFlag}) => {
    const[values,setValue]=useState({
        name:user.name,
        username:user.username,
        email:user.email,
        address:user.address,
        phone:user.phone
    })

    const submitForm=async(e)=>{
        e.preventDefault()
        const {data}= await axios.put("http://localhost:7500/ContentManager/users/",{id:user._id,name:values.name,username:values.username,email:values.email,address:values.address,phone:values.phone})
    fechUsers()
    setFlag(false)
    
    }
  return <form onSubmit={submitForm}>
    <input value={values.name} placeholder={values.name} onChange={(e)=>setValue(prev => ({...prev,name: e.target.value}))}  />
    <input value={values.username} placeholder={values.username} onChange={(e) => setValue(prev => ({ ...prev, username: e.target.value }))} />
    <input value={values.email} placeholder={values.email} onChange={(e)=>setValue(prev => ({...prev,email: e.target.value}))}  />
    <input value={values.address} placeholder={values.address} onChange={(e) => setValue(prev => ({ ...prev, address: e.target.value}))} />
    <input value={values.phone} placeholder={values.phone} onChange={(e)=>setValue(prev => ({...prev,phone: e.target.value}))}  />
    <button  type='submit'>send</button>
  </form>
}

export default UserUpdate