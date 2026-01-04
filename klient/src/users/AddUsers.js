
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
} from '@mui/material';


const AddUsers = () => {
  const [values, setValue] = useState({
    name: "",
    username: "",
    email: "",
    address: "",
    phone: ""
  })
  const naviage = useNavigate()
  const submitForm = async (e) => {
    e.preventDefault()
    const { data } = await axios.post("http://localhost:7500/ContentManager/users/", { name: values.name, username: values.username, email: values.email, address: values.address, phone: values.phone })
    setValue({
      name: "",
      username: "",
      email: "",
      address: "",
      phone: ""
    })
    naviage("/users")
  }
  return (
    <Grid container justifyContent="center" alignItems="flex-start" sx={{ mt: 5 }}>
      <Grid item xs={11} sm={8} md={5}>
        <Card sx={{ borderRadius: 2, boxShadow: 6 }}>
          <CardContent>
            <Typography variant="h6" sx={{ mb: 3, textAlign: 'center', color: '#ff6f00', fontWeight: 'bold' }}>
              Add New user
            </Typography>

            <form onSubmit={submitForm}>
              <Grid container spacing={2} direction="column">
                <Grid item xs={12}>
                  <TextField fullWidth value={values.name} label="name" variant="filled" onChange={(e) => setValue(prev => ({ ...prev, name: e.target.value }))} sx={{ backgroundColor: '#fff3e0', borderRadius: 2 }} />
                </Grid>

                <Grid item xs={12}>
                  <TextField fullWidth value={values.username} label="username" variant="filled" onChange={(e) => setValue(prev => ({ ...prev, username: e.target.value }))} sx={{ backgroundColor: '#fff3e0', borderRadius: 2 }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth value={values.email} label="email" variant="filled" onChange={(e) => setValue(prev => ({ ...prev, email: e.target.value }))} sx={{ backgroundColor: '#fff3e0', borderRadius: 2 }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth value={values.address} label="address" variant="filled" onChange={(e) => setValue(prev => ({ ...prev, address: e.target.value }))} sx={{ backgroundColor: '#fff3e0', borderRadius: 2 }} />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth value={values.phone} label="phone" variant="filled" onChange={(e) => setValue(prev => ({ ...prev, phone: e.target.value }))} sx={{ backgroundColor: '#e0f7fa', borderRadius: 2 }} />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    disabled={values.name === "" || values.username === ""}
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

export default AddUsers