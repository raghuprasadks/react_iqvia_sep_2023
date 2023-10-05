import React from 'react'
import Task from './Task'

const ListTask = ({tasks,onDeleteTask,onUpdateTask}) => {
    console.log("tasks ")
    console.log(tasks)
  return (
        <ul style={{listStyle:'none'}}>
            {
            tasks.map((task)=>
               <li key={task.id}> <Task task={task} onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask}></Task>  </li>             
            )
        }
        </ul>
    
  )
}

export default ListTask