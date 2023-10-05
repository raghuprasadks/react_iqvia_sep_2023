import React,{useState,useRef,useEffect} from 'react'
//props.saveCorona
const CoronaForm = ({saveCorona}) => {

    //const [code,setCode]=useState()
    const coderef = useRef()
    const [name,setName]=useState()
    const [active,setActive]=useState()
    const [recovered,setRecovered]=useState()
    const [death,setDeath]=useState()
    const [total,setTotal]=useState()

    const addCorona = (e)=>{
        e.preventDefault()
        let corona = {code:coderef.current.value,name,active,recovered,death,total}
        console.log(corona)
        saveCorona(corona)    
    }


    return (
    <>
    <div align="center">

        <h1>Corona Dashboard</h1>
        <form onSubmit={addCorona}>
        <label>Code</label>
        <input ref={coderef}/><br/>
        <label>Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} /><br/>
        <label>Active</label>
        <input value={active} onChange={(e)=>setActive(e.target.value)} /><br/>
        <label>Recovered</label>
        <input value={recovered} onChange={(e)=>setRecovered(e.target.value)} /><br/>
        <label>Death</label>
        <input value={death} onChange={(e)=>setDeath(e.target.value)} /><br/>
        <label>Total</label>
        <input value={total} onChange={(e)=>setTotal(e.target.value)} /><br/>
        <button type="submit">Add Corona</button>
        </form>
        </div>
        
    </>
  )
}

export default CoronaForm