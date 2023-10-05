/**
function tasksReducer(tasks, action) {
    switch (action.type) {
      case 'added': {
        return [
          ...tasks,
          {
            id: action.id,
            text: action.text,
            done: false,
          },
        ];
      }
      case 'changed': {
        return tasks.map((t) => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case 'deleted': {
        return tasks.filter((t) => t.id !== action.id);
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }
  */
  const TaskReducer=(tasks,action)=>{
    console.log("action")
    console.log(action)

    switch(action.type){
        case 'ADDED':
            {return [...tasks,{id:action.id,name:action.name,done:false}]}
        case 'CHANGED':
            {return tasks.map((task)=>task.id ==action.task.id?action.task:task)}
        case 'DELETED':
            {return tasks.filter((task)=>task.id!=action.id)}
        default:
            throw Error('Unknown Error '+action.types)

    }

}

export default TaskReducer