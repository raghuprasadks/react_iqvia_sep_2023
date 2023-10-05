import React, {useReducer} from 'react'
import TaskReducer from '../reducers/TaskReducer'
import AddTask from './AddTask'
import ListTask from './ListTask'

const InitialState=[]
    let nextId=0

const TaskManagement = () => {

    
    const [tasks,dispatch]=useReducer(TaskReducer,InitialState)

    const onAddTask=(name)=>{
        dispatch({type:'ADDED',id:nextId++,name:name,done:false})
    }

    const onDeleteTask=(id)=>{
        dispatch({type:'DELETED',id:id})
    }

    const onUpdateTask=(task)=>{
        console.log('onUpdateTask',task)
        dispatch({type:'CHANGED',task})
    }


  return (
    <div align="center">
        <h1>TaskManagement</h1>
        <AddTask onAddTask={onAddTask}></AddTask>
        <ListTask tasks={tasks} onDeleteTask={onDeleteTask} onUpdateTask={onUpdateTask}></ListTask>     
    </div>
  )
}

export default TaskManagement