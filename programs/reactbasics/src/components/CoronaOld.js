import React,{useState,useRef,useEffect} from 'react'
//props.saveCorona
const Corona = ({saveCorona,listCorona,deleteCoronaData}) => {

    //const [code,setCode]=useState()
    const coderef = useRef()
    const [name,setName]=useState("karnataka")
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

    const deleteCorona=(code)=>{
        console.log("delete ",code)
        deleteCoronaData(code)
    }
    /** - scenario 1
    useEffect(()=>{
        console.log("use effect is called during every time component is rendered")
    })
    */

    /** scenario 2
    useEffect(()=>{
        console.log("use effect is called during first time loading of the component")
    },[])
     */
    
    // scenario 3
    useEffect(()=>{
        console.log("use effect is called whenever there is a change in the name state")
    },[name])
     

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
        <div align="center">
            <table>
                <tr>
                    <th>Code</th>
                    <th>Name</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Death</th>
                    <th>Total</th>
                    <th>Delete</th>
                </tr>
                {listCorona.map((corona)=>
                    <tr key={corona.code}>
                    <td>{corona.code}</td>
                    <td>{corona.name}</td>
                    <td>{corona.active}</td>
                    <td>{corona.recovered}</td>
                    <td>{corona.death}</td>
                    <td><button onClick={()=>deleteCorona(corona.code)}>Delete</button></td>
                </tr>
                )}
            </table>
        </div>
        
    </>
  )
}

export default Corona