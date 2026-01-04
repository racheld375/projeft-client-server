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


const AddPhotos = () => {
  const [values, setValue] = useState({
    title: "",
    imageUrl: ""
  })
  const naviage = useNavigate()
  const submitForm = async (e) => {
    e.preventDefault()
    const { data } = await axios.post("http://localhost:7500/ContentManager/photos/", { title: values.title, imageUrl: values.imageUrl })
    setValue({
      title: "",
      imageUrl: ""
    })
    naviage("/photos")
  }
  return (
    <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 5 }}>
      <Grid item xs={11} sm={8} md={5}>
        <Card sx={{ borderRadius: 2, boxShadow: 6 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 3, textAlign: 'center', color: '#ff6f00', fontWeight: 'bold' }}>
              Add New Photo
            </Typography>

            <form onSubmit={submitForm}>
              <Grid container spacing={2} >
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
                    value={values.imageUrl}
                    label="Image URL"
                    variant="filled"
                    onChange={(e) => setValue(prev => ({ ...prev, imageUrl: e.target.value }))}
                    sx={{ backgroundColor: '#e0f7fa', borderRadius: 2 }}
                  />
                </Grid>

                {/* כפתור שליחה */}
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    disabled={!values.title || !values.imageUrl}
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

export default AddPhotos




