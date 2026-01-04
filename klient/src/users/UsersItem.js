import React, { useState } from 'react';
import { MdDeleteSweep } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import axios from 'axios';
import UserUpdate from './UserUpdate';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';

const UsersItem = ({ user, fechUsers }) => {
  const [flag, setFlag] = useState(false)

  const deletewone = async () => {
    const { data } = await axios.delete("http://localhost:7500/ContentManager/users/", { data: { id: user._id } })
    fechUsers()
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
          name: {user.name}
        </Typography>

        <Typography sx={{ mb: 3, color: 'text.secondary' }}>
          username:  {user.username}
        </Typography>
        <Typography sx={{ mb: 3, color: 'text.secondary' }}>
          email:  {user.email}
        </Typography>
        <Typography sx={{ mb: 3, color: 'text.secondary' }}>
          address:  {user.address}
        </Typography>
        <Typography sx={{ mb: 3, color: 'text.secondary' }}>
          phone:  {user.phone}
        </Typography>

        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item>
            <Button
              variant="contained"
              onClick={deletewone}
              color="warning"
              startIcon={<MdDeleteSweep />}
            >

            </Button>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              onClick={() => setFlag(true)}
              color="secondary"
              startIcon={<MdEdit />}
            >
            </Button>

          </Grid>
          {flag && <UserUpdate user={user} fechUsers={fechUsers} setFlag={setFlag} />}
        </Grid>
      </CardContent>
    </Card>

  );
};

export default UsersItem;