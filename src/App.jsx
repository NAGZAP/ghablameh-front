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
import Register from './components/org';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Login />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/Navbar" element={<Navbar />} />
      <Route path="/Update" element={<Update />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;


