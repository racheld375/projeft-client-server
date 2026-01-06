import { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Grid, Card, CardContent } from '@mui/material';

const UserUpdate = ({ user, fechUsers, setFlag }) => {
  const [values, setValue] = useState({
    name: user.name,
    username: user.username,
    email: user.email,
    address: user.address,
    phone: user.phone
  })

  const submitForm = async (e) => {
    e.preventDefault()
    const { data } = await axios.put("http://localhost:7500/ContentManager/users/", { id: user._id, name: values.name, username: values.username, email: values.email, address: values.address, phone: values.phone })
    fechUsers()
    setFlag(false)

  }
  return (
    <Card sx={{ mt: 2, p: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <form onSubmit={submitForm}>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <TextField
                fullWidth
                value={values.name}
                label="name"
                variant="filled"
                onChange={(e) => setValue(prev => ({ ...prev, name: e.target.value }))}
                sx={{ backgroundColor: '#fff3e0', borderRadius: 2 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                value={values.username}
                label="username"
                variant="filled"
                onChange={(e) => setValue(prev => ({ ...prev, username: e.target.value }))}
                sx={{ backgroundColor: '#e0f7fa', borderRadius: 2 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                value={values.email}
                label="email"
                variant="filled"
                onChange={(e) => setValue(prev => ({ ...prev, email: e.target.value }))}
                sx={{ backgroundColor: '#fff3e0', borderRadius: 2 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                value={values.address}
                label="address"
                variant="filled"
                onChange={(e) => setValue(prev => ({ ...prev, address: e.target.value }))}
                sx={{ backgroundColor: '#fff3e0', borderRadius: 2 }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                value={values.phone}
                label="phone"
                variant="filled"
                onChange={(e) => setValue(prev => ({ ...prev, phone: e.target.value }))}
                sx={{ backgroundColor: '#fff3e0', borderRadius: 2 }}
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

export default UserUpdate;
