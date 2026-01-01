import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navigates = () => {
  return <>
  <div><NavLink to="/">home page</NavLink></div>
  <div><NavLink to="/todos">todos</NavLink></div>
  <div><NavLink to="/posts">posts</NavLink></div>
  <div><NavLink to="/users">users</NavLink></div>
  <div><NavLink to="/photos">photos</NavLink></div>
  {/* <NavLink to="/todos/add">add todo</NavLink> */}
  </>
}

export default Navigates