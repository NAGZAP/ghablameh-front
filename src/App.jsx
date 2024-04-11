import { useState } from 'react';
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import SignUp from './SignUp/SignUp.jsx';
import Login from './components/login';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<SignUp />} />
      <Route  path="/Login" element={<Login />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/navbar" element={<Navbar />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;


