import React from 'react'
import { useEffect,useState} from "react"
import Axios from "axios"
import { Link } from 'react-router-dom'
import TodosItem from './TodosItem'

const TodosList = () => {
    const [todos,setTodos] =useState([])
    const[search,setSearch]=useState("")
    const[yes,setyes]=useState(false)
    const fechTodos= async ()=>{
        const{data}=await Axios.get("http://localhost:7500/ContentManager/todos/")
        setTodos(data)
    }

    useEffect(()=>{
        fechTodos()
    },[])

    if(todos.length===0) return <h2>loading</h2>

  return <>
  <Link to="/todos/Add">add todo</Link>
    <input value={search} placeholder="search" onChange={(e) => (setSearch(e.target.value))} />
    <label> <input type="checkbox" checked={yes} onChange={(e) =>  setyes(!yes)} />To complete</label>
   {yes && todos.filter((t)=> t.title.includes(search)&& !t.completed).map((todo,index)=>{
    return <TodosItem todo={todo} fechTodos={fechTodos}/>}
    )}
  {!yes && todos.filter((t)=> t.title.includes(search)).map((todo,index)=>{
    return <TodosItem todo={todo} fechTodos={fechTodos}/>}
    )}
  </>
}

export default TodosList