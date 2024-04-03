import { useState } from 'react';
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import Login from './components/login';
import ChooseOrganization from './components/ChooseOrganization';
import './App.css';
import Footer from './components/footer';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<ChooseOrganization />} />
      <Route path="/footer" element={<Footer />} />
      <Route path="/navbar" element={<Navbar />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;


