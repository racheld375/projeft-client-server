
import React, { useState } from 'react';
import { MdDeleteSweep } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import axios from 'axios';
import TodoUpdate from './TodoUpdate';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';
import { MdCheck } from "react-icons/md";

const TodosItem = ({ todo, fechTodos }) => {
  const [flag, setFlag] = useState(false)

  const deletewone = async () => {
    const { data } = await axios.delete("http://localhost:7500/ContentManager/todos/", { data: { id: todo._id } })
    fechTodos()
  }

  const CompUpdate = async () => {
    console.log("you")
    const { data } = await axios.put("http://localhost:7500/ContentManager/todos/", { id: todo._id, title: todo.title, tags: todo.tags, completed: true })
    fechTodos()
  }

  return (
    <Card
      sx={{
        width: '100%',        // תופס את רוחב הקונטיינר
        minHeight: 180,       // גובה אחיד
        borderRadius: 1,      // פחות עיגול
        boxShadow: 2,
        textAlign: 'left',    // טקסט מימין
        p: 2,                 // ריווח פנימי
      }}
    >
      <CardContent sx={{ width: '100%' }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          {todo.title}
        </Typography>
        <ul>
          {(todo.tags).map(tag => (
            <li >
              {tag}
            </li>
          ))}
        </ul>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item>
            <Button
              variant="contained"
              color="warning"
              startIcon={<MdDeleteSweep />}
              onClick={deletewone}
            >
            </Button>
          </Grid>

          <Grid item>
            <Button
              color="Primary"


              variant="contained" disabled={todo.completed} onClick={CompUpdate}
            >
              <MdCheck />  completed
            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setFlag(true)}
              startIcon={<MdEdit />}
            >
            </Button>

          </Grid>
          {flag && <TodoUpdate todo={todo} fechTodos={fechTodos} setFlag={setFlag} />}
        </Grid>
      </CardContent>
    </Card>



  );
};

export default TodosItem;