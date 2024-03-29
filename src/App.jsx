import { useState } from 'react';
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import Login from './components/login';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/Navbar';
import Updateorg from './components/updateorg'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Login />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/updateorg" element={<Updateorg />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;


