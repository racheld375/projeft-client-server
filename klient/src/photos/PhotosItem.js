
import React, { useState } from 'react';
import { MdDeleteSweep } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import axios from 'axios';
import PhotosUpdate from './PhotosUpdate';
import { Button, Card, CardContent, Typography, Grid } from '@mui/material';

const PhotosItem = ({ photo, fechPhotos }) => {
  const [flag, setFlag] = useState(false);

  const deleteOne = async () => {
    await axios.delete("http://localhost:7500/ContentManager/photos/", { data: { id: photo._id } });
    fechPhotos();
  };

  return (
    <Card sx={{ mb: 2, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 1 }}>{photo.title}</Typography>
        <img
          src={`/images/${photo.imageUrl}`}
          alt={photo.title}
          style={{
            // width: "200px", 
            width: "250px",        // רוחב קבוע
            height: "290px",       // גובה קבוע
            objectFit: "cover",
            borderRadius: "10px", display: "block", marginBottom: "10px"
          }}
        />

        <Grid container spacing={2}>
          <Grid item>
            <Button variant="contained" color="warning" onClick={deleteOne}>
              <MdDeleteSweep />
            </Button>
          </Grid>

          <Grid item>
            <Button variant="contained" color="secondary" onClick={() => setFlag(true)}>
              <MdEdit />
            </Button>
          </Grid>
        </Grid>

        {flag && <PhotosUpdate photo={photo} fechPhotos={fechPhotos} setFlag={setFlag} />}
      </CardContent>
    </Card>
  );
};

export default PhotosItem;
