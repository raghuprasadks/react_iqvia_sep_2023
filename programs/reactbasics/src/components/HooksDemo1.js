import React,{useRef,useEffect,useState} from 'react'

const HooksDemo1 = () => {

    const [code,setCode]=useState(0)
    const codeRef = useRef(code)

    useEffect(()=>{
       // console.log("use effect::counter",code)
        if (code%2==0)
            console.log("use effect::counter:even",code)
        
    },[code])

    const trackCount=()=>{
        codeRef.current=codeRef.current+1
        console.log("code ref")        
        setCode(codeRef.current)
        console.log(codeRef.current)
    }
  return (
    <div align="center">

        <label>Code</label>
        <input value={code}></input>
        <h1>Code : {codeRef.current}</h1>
        <button onClick={trackCount}>Counter</button>
    </div>
  )
}

export default HooksDemo1