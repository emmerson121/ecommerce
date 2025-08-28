import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './home';
import Navbar from './navbar';
import About from './about';
import Product from './product';
import Category from './category';
import Pages from './pages';
import Blog from './blog';
import Contact from './contact';


function App() {
  return (
      <BrowserRouter>
      <Routes>
      {/* <Route path='./navbar' element={<Navbar />} /> */}
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='product' element={<Product />} />
        <Route path='category' element={<Category />} />
        <Route path='pages' element={<Pages />} />
        <Route path='blog' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
