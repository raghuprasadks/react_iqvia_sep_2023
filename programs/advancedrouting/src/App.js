import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import BooksLayout from './components/BooksLayout';
import BookList from './components/BookList';
import Book from './components/Book';
import NewBook from './components/NewBook';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/books" element={<BooksLayout/>}>
        <Route index element={<BookList/>}/>
        <Route path=":id" element={<Book/>}/>
        <Route path="new" element={<NewBook/>}/>
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
