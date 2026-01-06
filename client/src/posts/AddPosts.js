
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography
} from '@mui/material';


const AddPost = () => {
  const [values, setValue] = useState({
    title: "",
    body: ""
  })
  const naviage = useNavigate()
  const submitForm = async (e) => {
    e.preventDefault()
    const { data } = await axios.post("http://localhost:7500/ContentManager/posts/", { title: values.title, body: values.body })
    setValue({
      title: "",
      body: ""
    })
    naviage("/posts")
  }
  return (
    <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 5 }}>
      <Grid item xs={11} sm={8} md={5}>
        <Card sx={{ borderRadius: 2, boxShadow: 6 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 3, textAlign: 'center', color: '#ff6f00', fontWeight: 'bold' }}>
              Add New Post
            </Typography>

            <form onSubmit={submitForm}>
              <Grid container spacing={2} direction="column">
                {/* שדה כותרת */}
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

                {/* שדה URL */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    value={values.body}
                    label="body"
                    variant="filled"
                    onChange={(e) => setValue(prev => ({ ...prev, body: e.target.value }))}
                    sx={{ backgroundColor: '#e0f7fa', borderRadius: 2 }}
                  />
                </Grid>

                {/* כפתור שליחה */}
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    disabled={!values.title || !values.body}
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

export default AddPost