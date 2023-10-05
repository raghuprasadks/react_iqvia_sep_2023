import React,{useState,useRef,useEffect} from 'react'
import Corona from './Corona'
//props.saveCorona
const CoronaList = ({listCorona,deleteCoronaData}) => {

        const deleteCorona=(code)=>{
        console.log("delete ",code)
        deleteCoronaData(code)
    }

    return (
    <>
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
                    <Corona corona={corona} deleteCoronaData={deleteCoronaData}/>
                )}
            </table>
        </div>
        
    </>
  )
}

export default CoronaList