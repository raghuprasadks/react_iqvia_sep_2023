import React,{useState,useEffect} from 'react'
import useFetch from '../hooks/useFetch'

const FetchAPITodos = () => {

   // const [todos,setTodos]=useState([])
    const url="https://jsonplaceholder.typicode.com/todos"

    /**
    useEffect(()=>{
        console.log("use Effect")
        fetch(url)
            .then(response => response.json())
           // .then(json => console.log(json))
           .then(json => setTodos(json))
           .catch((error)=>console.log(error))
    },[])
 */
    const [todos] = useFetch(url);


  return (
    <div>
        <h1>FetchAPITodos</h1>

        <table>
            <tr>
                <th>User Id</th>
                <th>Id</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>
            {todos.map((todo)=>
                <tr key={todo.id}>
                <td>{todo.userId}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed.toString()}</td>
            </tr>
            )}
        </table>
        
    </div>
  )
}

export default FetchAPITodos