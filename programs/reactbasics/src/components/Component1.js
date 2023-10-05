import React,{useState} from 'react'
import Component2 from './Component2'
import { createContext } from 'react'
import { MyContext } from '../context/MyContext'

//const UserContext = createContext()

const Component1 = () => {

    const [user,setUser]=useState("test user")

  return (
    <MyContext.Provider value={user}>
    <div>
        <h1>Component1</h1>
        <Component2 user={user}></Component2>
        
    </div>
    </MyContext.Provider>

  )
}

export default Component1