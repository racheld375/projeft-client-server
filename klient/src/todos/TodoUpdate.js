import  { useState } from 'react'
import axios from 'axios';

const TodoUpdate = ({todo,fechTodos,setFlag}) => {

    const[values,setValue]=useState({
        title:todo.title,
        completed:todo.completed,
        tags:todo.tags
    })
    const submitForm=async(e)=>{
        e.preventDefault()
        const {data}= await axios.put("http://localhost:7500/ContentManager/todos/",{id:todo._id,title:values.title,tags:values.tags,completed:values.completed})
    fechTodos()
    setFlag(false)
    
    }
  return <form onSubmit={submitForm}>
    <input value={values.title} placeholder={values.title} onChange={(e)=>setValue(prev => ({...prev,title: e.target.value}))}  />
    <button  onClick={()=>setValue(prev => ({...prev,completed: true}))} >completed</button>
    <input value={values.tags} placeholder={values.tags} onChange={(e) => setValue(prev => ({ ...prev, tags: e.target.value.split(',') }))} />
    <button  type='submit'>send</button>
  </form>
}

export default TodoUpdate