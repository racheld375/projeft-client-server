
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  Checkbox,
  FormControlLabel,
  Box
} from '@mui/material';


const AddTodos = () => {
  const [values, setValue] = useState({
    title: "",
    completed: false,
    tags: []
  })
  const naviage = useNavigate()
  
  const submitForm = async (e) => {
    e.preventDefault()
    const { data } = await axios.post("http://localhost:7500/ContentManager/todos/", { title: values.title, tags: values.tags, completed: values.completed })
    setValue({
      title: "",
      completed: false,
      tags: []
    })
    naviage("/todos")
  }
  return (
    <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 5 }}>
      <Grid item xs={11} sm={8} md={5}>
        <Card sx={{ borderRadius: 2, boxShadow: 6 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 3, textAlign: 'center', color: '#ff6f00', fontWeight: 'bold' }}>
              Add New todo
            </Typography>

            <form onSubmit={submitForm}>
              <Grid container spacing={2} >
                <Grid item xs={12}>
                  <TextField fullWidth value={values.title} label="Title" variant="filled" onChange={(e) => setValue(prev => ({ ...prev, title: e.target.value }))} sx={{ backgroundColor: '#fff3e0', borderRadius: 2 }} />
                </Grid>

                <Grid item xs={12}>
                  <Box
                    sx={{
                      backgroundColor: '#e0f7fa',
                      borderRadius: 2,
                      px: 2,
                      py: 1,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.completed}
                          onChange={(e) =>
                            setValue(prev => ({
                              ...prev,
                              completed: e.target.checked
                            }))
                          }
                          sx={{
                            color: '#ff6f00',
                            '&.Mui-checked': {
                              color: '#ff6f00',
                            },
                          }}
                        />
                      }
                      label="Completed"
                      sx={{
                        '.MuiFormControlLabel-label': {
                          fontWeight: 500,
                        },
                      }}
                    />
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <TextField fullWidth value={values.tags} label="tags" variant="filled" onChange={(e) => setValue(prev => ({ ...prev, tags: e.target.value.split(',') }))} sx={{ backgroundColor: '#e0f7fa', borderRadius: 2 }} />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    disabled={!values.title}
                    sx={{
                      height: '100%',
                      backgroundColor: '#ff6f00',
                      color: '#fff',
                      fontWeight: 'bold',
                      borderRadius: 2,
                      '&:hover': { backgroundColor: '#e65100' },
                    }}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );


}

export default AddTodos




