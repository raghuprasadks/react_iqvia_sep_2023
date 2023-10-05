import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const BooksLayout = () => {
  return (
    <>
    <nav>
        <ul>
            <li><Link to="/books/1">Book 1</Link></li>
        </ul>
        <ul>
            <li><Link to="/books/2">Book 2</Link></li>
        </ul>
        <ul>
            <li><Link to="/books/new">New Book</Link></li>
        </ul>
    </nav>
    <Outlet/>
    </>
  )
}

export default BooksLayout