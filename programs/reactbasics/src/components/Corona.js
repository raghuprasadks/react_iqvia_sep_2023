import React,{useState,useRef,useEffect} from 'react'
//props.saveCorona
const Corona = ({corona,deleteCoronaData}) => {

        const deleteCorona=(code)=>{
        console.log("delete ",code)
        deleteCoronaData(code)
    }
    
    return (
    <>
                    <tr key={corona.code}>
                    <td>{corona.code}</td>
                    <td>{corona.name}</td>
                    <td>{corona.active}</td>
                    <td>{corona.recovered}</td>
                    <td>{corona.death}</td>
                    <td><button onClick={()=>deleteCorona(corona.code)}>Delete</button></td>
                </tr>
               
       
        
    </>
  )
}

export default Corona