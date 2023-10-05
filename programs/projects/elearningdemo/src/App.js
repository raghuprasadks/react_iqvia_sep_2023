import logo from './logo.svg';
import './App.css';
import SignUp from './components/SignUp';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './components/Login';
import Contact from './components/Contact';
import Home from './components/Home';
import ReducerDemo from './components/ReducerDemo';
import Dashboard from './components/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import TaskManagement from './components/TaskManagement';

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="reducer" element={<ReducerDemo/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="taskmanagement" element={<TaskManagement/>}/>
      </Route>
    </Routes>    
    </BrowserRouter>
    </AuthProvider>   
    </>
  );
}

export default App;
