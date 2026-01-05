

import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import TodosItem from './TodosItem';
import { Grid, Button, TextField, Checkbox, FormControlLabel, Card } from '@mui/material';
import { FiSearch } from "react-icons/fi";
import InputAdornment from '@mui/material/InputAdornment';
import { MdAddTask  } from "react-icons/md";



const TodosList = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [yes, setYes] = useState(false);

  const fetchTodos = async () => {
    const { data } = await Axios.get("http://localhost:7500/ContentManager/todos/");
    setTodos(data);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  if (todos.length === 0) return <h2>Loading...</h2>;

  return (
    <>
       <Grid
  container
  justifyContent="flex-end"
  sx={{
    mb: 2,
    position: 'relative',
    right: '-350px'   // או -24px לפי ה־theme
  }}
>

  <Link to="/posts/Add" style={{ textDecoration: 'none' }}>
    <Button
    startIcon={<MdAddTask   />}
      variant="contained"
      sx={{
        borderRadius: '10px',   // קצוות עגולים מעט
        px: 3,
        py: 1,
        backgroundColor: '#ff6f00d6',
        fontWeight: 'bold',
        textTransform: 'none',
        '&:hover': {
          backgroundColor: '#ff6f00b1',
        },
      }}
    >
      
    </Button>
  </Link>
</Grid>


      {/* שורה עם חיפוש + To complete */}
      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 3 }}>
        {/* תיבת חיפוש */}
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            value={search}
            label="Search todos"
            variant="filled"
            onChange={(e) => setSearch(e.target.value)}
            sx={{ backgroundColor: '#e0f7fa', borderRadius: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FiSearch />
                </InputAdornment>
              ),
            }}
          />
        </Grid>

        {/* Checkbox To complete */}
        <Grid item xs={12} sm={3} md={2}>
          <Card
            sx={{
              p: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 2,
              backgroundColor: '#fff3e0',
              cursor: 'pointer',
              '&:hover': { backgroundColor: '#ffe0b2' }
            }}
            onClick={() => setYes(!yes)}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={yes}
                  onChange={() => setYes(!yes)}
                  sx={{
                    color: '#ff6f00',
                    '&.Mui-checked': { color: '#e65100' },
                  }}
                />
              }
              label="To complete"
              sx={{ m: 0, fontWeight: 'bold' }}
            />
          </Card>
        </Grid>
      </Grid>

      {/* רשימת הכרטיסים */}
      <Grid container direction="column" spacing={1} alignItems="center">
        {(yes ? todos.filter(t => t.title.toLowerCase().includes(search.toLowerCase()) && !t.completed)
          : todos.filter(t => t.title.toLowerCase().includes(search.toLowerCase()))
        ).map(todo => (
          <Grid item xs={12} key={todo._id} sx={{ width: '900px' }}>
            <TodosItem todo={todo} fechTodos={fetchTodos} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default TodosList;

