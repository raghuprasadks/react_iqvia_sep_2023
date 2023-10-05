import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <nav>
        <ul>
            <li>eLearning</li>
        </ul>
        <ul>
            <li><Link to="/">Home</Link></li>
        </ul>
        <ul>
            <li><Link to="/signup">Sign Up</Link></li>
        </ul>
        <ul>
            <li><Link to="/login">Login</Link></li>
        </ul>

        <ul>
            <li><Link to="/contact">Contact Us</Link></li>
        </ul>

        <ul>
            <li><Link to="/reducer">Reducer Demo</Link></li>
        </ul>

        <ul>
            <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>

        <ul>
            <li><Link to="/taskmanagement">Task Management</Link></li>
        </ul>
    </nav>
    <Outlet/>    
    </>
  )
}

export default Layout