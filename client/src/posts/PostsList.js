
import { useEffect, useState } from "react";
import Axios from "axios";
import { Link } from 'react-router-dom';
import PostsItem from './PostsItem';
import { Grid, Button, TextField, Checkbox, FormControlLabel, Card } from '@mui/material';
import { FiSearch } from "react-icons/fi";
import InputAdornment from '@mui/material/InputAdornment';
import { MdAdd  } from "react-icons/md";



const PostsList = () => {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("")
  const [top, setStop] = useState(false)

  const fechPosts = async () => {
    let data
    if (!top)
      data = await (await Axios.get("http://localhost:7500/ContentManager/posts")).data
    if (top)
      data = await (await Axios.get("http://localhost:7500/ContentManager/posts/top")).data
    setPosts(data)
  }


  useEffect(() => {
    fechPosts()
  }, [top])

  if (posts.length === 0) return <h2>loading</h2>


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
    startIcon={<MdAdd   />}
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



      <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6} md={4}>
          <TextField
            fullWidth
            value={search}
            label="Search posts"
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

          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={top}
                  onChange={() => setStop(!top)}
                  sx={{
                    color: '#ff6f00',
                    '&.Mui-checked': { color: '#e65100' },
                  }}
                />
              }
              label="Top Posts"
              sx={{ m: 0, fontWeight: 'bold' }}
            />
          </Card>
        </Grid>
      </Grid>



      <Grid container direction="column" spacing={1}>
        {posts
          .filter(p => p.title.toLowerCase().includes(search.toLowerCase()))
          .map(post => (
            <Grid item xs={12} key={post._id} sx={{ width: '900px' }}>
              <PostsItem post={post} fechPosts={fechPosts} />
            </Grid>
          ))}
      </Grid>

    </>
  );
};

export default PostsList;
