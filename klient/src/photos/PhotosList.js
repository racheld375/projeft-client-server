
import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import PhotosItem from './PhotosItem';
import { Grid, Button } from '@mui/material';
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
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
    startIcon={<MdOutlineAddPhotoAlternate  />}
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
