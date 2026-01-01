
import{Outlet} from "react-router-dom"
import Navigates from "./Navigates"
import { useState } from "react"

const Layout = () => {
  return (
    <div className='page'>
        <header>
            <Navigates/>
        </header>
        <main>
            <Outlet />
        </main>
        {/* <footer>footer</footer> */}
    </div>
    )
}
export default Layout