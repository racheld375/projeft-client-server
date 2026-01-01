import  { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddTodos = () => {
    const[values,setValue]=useState({
        title:"",
        completed:false,
        tags:[]
    })
    const naviage= useNavigate()
    const submitForm=async(e)=>{
        e.preventDefault()
        const {data}= await axios.post("http://localhost:7500/ContentManager/todos/",{title:values.title,tags:values.tags,completed:values.completed})
        setValue({
        title:"",
        completed:false,
        tags:[]
    })
    naviage("/todos")
    }

  return <>
  
  <form onSubmit={submitForm}>
    <input value={values.title} placeholder="enter a title" onChange={(e)=>setValue(prev => ({...prev,title: e.target.value}))}  />
    <label> <input type="checkbox" checked={values.completed} onChange={(e) =>  setValue(prev => ({...prev,completed: e.target.checked}))} />completed</label>
    <input value={values.tags} placeholder="enter tags" onChange={(e) => setValue(prev => ({ ...prev, tags: e.target.value.split(',') }))} />
    <button disabled={values.title===""} type='submit'>send</button>
  </form>
  
  </>
}

export default AddTodos