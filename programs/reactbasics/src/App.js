import logo from './logo.svg';
import './App.css';

import Header from './components/Header';

import Content from './components/Content';
import AsianGames from './components/AsianGames';
import Employees from './components/Employees';
import CounterClass from './components/CounterClass';
import Customer from './components/Customer';
import Product from './components/Product';
import HooksDemo1 from './components/HooksDemo1';
import { useState,useEffect } from 'react';
import FormValidation from './components/FormValidation';
import CoronaForm from './components/CoronaForm';
import CoronaList from './components/CoronaList';
import Component1 from './components/Component1';
import {AddUser} from './components/AddUser'
import {User} from './components/User'
import "./styles.css";

function App() {

  const empdata=[
    {
      code:1,
      name:"ravi",
      dept:'it',
      sal:60000
    },
    {
      code:2,
      name:"rekha",
      dept:'it',
      sal:60000
    }
]

 const [coronadata,setCoronadata]=useState([])

 const saveCoronaHandler=(corona)=>{
  console.log("save corona")
  console.log(corona)
  setCoronadata([...coronadata,corona])
 }

 const deleteCoronaHandler=(code)=>{
  console.log('deleteCoronaHandler')
  let filtereddata = coronadata.filter((corona)=>corona.code !=code)
  setCoronadata(filtereddata)
 }

 const [users, setUsers] = useState([]);

 useEffect(() => {
   fetchData();
 }, []);

 const fetchData = async () => {
   await fetch("https://jsonplaceholder.typicode.com/users")
     .then((response) => response.json())
     .then((data) => setUsers(data))
     .catch((error) => console.log(error));
 };

 const onAdd = async (name, email) => {
   await fetch("https://jsonplaceholder.typicode.com/users", {
     method: "POST",
     body: JSON.stringify({
       name: name,
       email: email
     }),
     headers: {
       "Content-type": "application/json; charset=UTF-8"
     }
   })
     .then((response) => {
       if (response.status !== 201) {
         return;
       } else {
         return response.json();
       }
     })
     .then((data) => {
       setUsers((users) => [...users, data]);
     })
     .catch((error) => console.log(error));
 };

 const onEdit = async (id, name, email) => {
   await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
     method: "PUT",
     body: JSON.stringify({
       name: name,
       email: email
     }),
     headers: {
       "Content-type": "application/json; charset=UTF-8"
     }
   })
     .then((response) => {
       if (response.status !== 200) {
         return;
       } else {
         return response.json();
       }
     })
     .then((data) => {
       // setUsers((users) => [...users, data]);
       const updatedUsers = users.map((user) => {
         if (user.id === id) {
           user.name = name;
           user.email = email;
         }

         return user;
       });

       setUsers((users) => updatedUsers);
     })
     .catch((error) => console.log(error));
 };

 const onDelete = async (id) => {
   await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
     method: "DELETE"
   })
     .then((response) => {
       if (response.status !== 200) {
         return;
       } else {
         setUsers(
           users.filter((user) => {
             return user.id !== id;
           })
         );
       }
     })
     .catch((error) => console.log(error));
 };

  return (
    <div className="App">
     {/** <h1>I am learning react</h1>
      <Header></Header>
      <Header/>
      <Content></Content>
      <AsianGames></AsianGames>
      <Employees data={empdata}></Employees>
      <CounterClass></CounterClass>
      <Customer/>
      <Product/>
      <HooksDemo1></HooksDemo1>
      <Corona saveCorona={saveCoronaHandler} listCorona={coronadata} deleteCoronaData={deleteCoronaHandler}></Corona>
      <FormValidation></FormValidation>
      <CoronaForm saveCorona={saveCoronaHandler}></CoronaForm>
      <CoronaList listCorona={coronadata} deleteCoronaData={deleteCoronaHandler}></CoronaList>
    <Component1></Component1>
   */}
   
   <div className="App">
      <h1>Users</h1>
      <AddUser onAdd={onAdd} />
      {users.map((user) => (
        <User
          id={user.id}
          key={user.id}
          name={user.name}
          email={user.email}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>

   
   
    </div>
  );
}

export default App;
