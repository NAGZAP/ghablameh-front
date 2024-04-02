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
import Update from './components/info';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Login />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Update" element={<Update />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;


