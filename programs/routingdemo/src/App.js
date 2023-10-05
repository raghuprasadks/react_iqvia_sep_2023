import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Car from './Cars';
import CSSComponent from './pages/CSSComponent';
import FetchAPITodos from './pages/FetchAPITodos';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="car" element={<Car/>}/>
          <Route path="css" element={<CSSComponent/>}/>
          <Route path="todos" element={<FetchAPITodos/>}/>
          <Route path="*" element={<NoPage />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
