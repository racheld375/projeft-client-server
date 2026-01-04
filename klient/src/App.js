
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import TodosList from './todos/TodosList';
import Layout from './common/Layout';
import AddTodos from './todos/AddTodos';
import PostsList from './posts/PostsList';
import AddPosts from './posts/AddPosts';
import UsersList from './users/UsersList';
import AddUsers from './users/AddUsers';
import PhotosList from './photos/PhotosList';
import AddPhotos from './photos/AddPhotos';
import React from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';


const theme = createTheme({
  palette: {
    primary: { main: '#ff6f00' }, // כתום חם
    secondary: { main: '#00bcd4' }, // תכלת
    background: { default: '#f0f4f8' }, // רקע כללי
  },
  typography: {
    fontFamily: 'Poppins, sans-serif', // פונט ייחודי
    fontSize: 14,
    button: { textTransform: 'none' }, // שמירת טקסט רגיל בכפתורים
  },
  shape: { borderRadius: 16 }, // פינות עגולות
});

function App() {
  return (

    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* מאפס סגנונות ברירת מחדל של הדפדפן */}
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<h1>home page</h1>} />
            <Route path='todos' element={<TodosList />} />
            <Route path='todos/add' element={<AddTodos />} />
            <Route path='posts' element={<PostsList />} />
            <Route path='posts/add' element={<AddPosts />} />
            <Route path='users' element={<UsersList />} />
            <Route path='users/add' element={<AddUsers />} />
            <Route path='photos' element={<PhotosList />} />
            <Route path='photos/add' element={<AddPhotos />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>

  );
}

export default App;
