
import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import PhotosItem from './PhotosItem';
import { Grid, Typography } from '@mui/material';

const PhotosList = () => {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    const { data } = await Axios.get("http://localhost:7500/ContentManager/photos/");
    setPhotos(data);
  }

  useEffect(() => {
    fetchPhotos();
  }, [])

  if (photos.length === 0) return <h2>Loading...</h2>;

  return (
    <>
      <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>
        <Link to="/photos/Add" style={{ textDecoration: 'none', color: '#ff6f00', fontWeight: 'bold', fontSize: '20px', }} onMouseEnter={(e) => e.target.style.color = '#e65100'} onMouseLeave={(e) => e.target.style.color = '#ff6f00'} > Add Photo</Link>
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {photos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} key={photo._id}>
            <PhotosItem photo={photo} fechPhotos={fetchPhotos} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default PhotosList;
