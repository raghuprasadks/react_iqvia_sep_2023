import React,{useState} from 'react'

const Task = ({task,onDeleteTask,onUpdateTask}) => {

    
    const [name,setName]=useState()
    const [edit,setEdit]=useState(false)

    const onEdit = (task)=>{
        console.log('onEdit')
        setEdit(true)
        setName(task.name)
    }

    const onUpdate=(task)=>{
    //  let updtask ={...task,name:name}
      console.log("task before ",task)
      onUpdateTask({...task,name:name})
      setEdit(false)
    }

  return (
    <>
    <input type="checkbox" checked={task.done} onChange={(e)=>{onUpdateTask({...task,done:e.target.checked})}}></input>
    {(edit)?<>
    <input value={name} onChange={(e)=>setName(e.target.value)}></input>
    <button onClick={()=>onUpdate(task)} >Save</button></>
    :<><label>{task.name}</label>
    <button onClick={()=>onEdit(task)}>Edit</button>
    </>
    }
    <button onClick={()=>onDeleteTask(task.id)}>Delete</button>
    </>
  )
}

export default Task