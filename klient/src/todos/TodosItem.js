import React, { useState } from 'react'
import axios from 'axios';
import TodoUpdate from './TodoUpdate';

const TodosItem = ({todo,fechTodos}) => {
    const[flag,setFlag]=useState(false)

    const deletewone=async()=>{
        const {data}= await axios.delete("http://localhost:7500/ContentManager/todos/",{data:{id:todo._id}})
        fechTodos()
    }

    const CompUpdate=async()=>{
        console.log("you")
        const {data}= await axios.put("http://localhost:7500/ContentManager/todos/",{id:todo._id,title:todo.title,tags:todo.tags,completed:true})
        fechTodos()
    }

  return <div>
  <h2>{todo.title}</h2>
  <button disabled={todo.completed} onClick={CompUpdate}>completed</button>
  <button onClick={()=>{deletewone()}}>delete</button>
  <button onClick={()=>{setFlag(true)}}>update</button>
  { flag && <TodoUpdate todo={todo} fechTodos={fechTodos} setFlag={setFlag} />}
  </div>
}

export default TodosItem