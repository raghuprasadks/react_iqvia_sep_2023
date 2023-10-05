import React from 'react'
import { useContext } from 'react';
import { MyContext } from '../context/MyContext'

const Component5 = ({user}) => {
    //const userfromcontext = useContext(UserContext);
    const userfromcontext=useContext(MyContext)
  return (
    <>
    <div>Component5 - user - {user}</div>
    <h1>User From context {userfromcontext}</h1>
    </>
  )
}

export default Component5