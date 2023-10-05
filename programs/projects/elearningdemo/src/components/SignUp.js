import React,{useRef} from 'react'

import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const nameRef = useRef("")
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const confirmPasswordRef = useRef("")

    const navigate = useNavigate()
    
    let usersApiUrl ="http://localhost:3000/users"
    const addUser=(e)=>{        
        e.preventDefault()
        console.log('addUser::',nameRef.current.value)
        let user ={name:nameRef.current.value,email:emailRef.current.value,password:passwordRef.current.value}
        console.log(user)
        fetch(usersApiUrl, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })
        .then(response=>response.json())
        .then(json=>{
            console.log(json)
            navigate("/login")
        })
    }

  return (
    <div align="center">
    <form onSubmit={addUser}>
    <h1>Sign Up</h1>
    <label>Name</label><input type='text' ref={nameRef}/><br/>  
    <label>Email</label><input type='email' ref={emailRef}/><br/>
    <label>Password</label><input type='password' ref={passwordRef}/><br/>
    <label>Confirm Password</label><input type='password' ref={confirmPasswordRef}/><br/>
    <button type="submit">Sign Up</button>
    </form>    
       
        
    </div>
  )
}

export default SignUp