import React,{useState} from 'react'

const AddTask = ({onAddTask}) => {

    const [name,setName]=useState()
  return (
    <div>
        <h1>AddTask..</h1>
        <label>Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <button onClick={()=>{onAddTask(name); setName(" ")} }>Add Task</button>
        
    </div>
  )
}

export default AddTask