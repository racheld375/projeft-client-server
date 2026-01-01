import  { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUsers = () => {
    const[values,setValue]=useState({
        user:"",
        username:"",
        email:"",
        address:"",
        phone:""
    })
    const naviage= useNavigate()
    const submitForm=async(e)=>{
        e.preventDefault()
        const {data}= await axios.post("http://localhost:7500/ContentManager/users/",{name:values.name,username:values.username,email:values.email,address:values.address,phone:values.phone})
        setValue({
        user:"",
        username:"",
        email:"",
        address:"",
        phone:""
    })
    naviage("/users")
    }

  return <>
  
  <form onSubmit={submitForm}>
    <input value={values.name} placeholder="name" onChange={(e)=>setValue(prev => ({...prev,name: e.target.value}))}  />
    <input value={values.username} placeholder="username" onChange={(e) => setValue(prev => ({ ...prev, username: e.target.value }))} />
    <input value={values.email} placeholder="email account" onChange={(e)=>setValue(prev => ({...prev,email: e.target.value}))}  />
    <input value={values.address} placeholder="address" onChange={(e) => setValue(prev => ({ ...prev, address: e.target.value}))} />
    <input value={values.phone} placeholder="phone" onChange={(e)=>setValue(prev => ({...prev,phone: e.target.value}))}  />
    <button disabled={values.name===""||values.username===""} type='submit'>send</button>
  </form>
  
  </>
}

export default AddUsers