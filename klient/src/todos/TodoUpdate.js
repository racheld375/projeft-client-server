
import { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Grid, Card, CardContent } from '@mui/material';

const TodoUpdate = ({ todo, fechTodos, setFlag }) => {

  const [values, setValue] = useState({
    title: todo.title,
    completed: todo.completed,
    tags: todo.tags
  })
  const submitForm = async (e) => {
    e.preventDefault()
    const { data } = await axios.put("http://localhost:7500/ContentManager/todos/", { id: todo._id, title: values.title, tags: values.tags, completed: values.completed })
    fechTodos()
    setFlag(false)

  }

  return (
    <Card sx={{ mt: 2, p: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <form onSubmit={submitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                value={values.title}
                label="Title"
                variant="filled"
                onChange={(e) => setValue(prev => ({ ...prev, title: e.target.value }))}
                sx={{ backgroundColor: '#fff3e0', borderRadius: 2 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                value={values.tags}
                label="tags"
                variant="filled"
                onChange={(e) => setValue(prev => ({ ...prev, tags: e.target.value.split(',') }))}
                sx={{ backgroundColor: '#e0f7fa', borderRadius: 2 }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                fullWidth
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: '#ff6f00',
                  color: '#fff',
                  fontWeight: 'bold',
                  height: '100%',
                  '&:hover': { backgroundColor: '#e65100' },
                  borderRadius: 2,
                }}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  );
};

export default TodoUpdate;
