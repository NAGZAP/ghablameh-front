import { useState } from 'react';
import {
  BrowserRouter,
  Routes, 
  Route,
} from "react-router-dom";
import './App.css';
import Footer from './components/footer';
import Update from './components/info';
import Register from './components/org';
import SignUp from './SignUp/SignUp'
import CustomSidebar from './components/Sidebar'
import PageNotFound from './components/pagenotfound'
import Navbar from './components/Navbar'
import Updateorg from './components/updateorg'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/footer" element={<Footer />} />
      <Route path="/Update" element={<Update />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/sidebar" element={<CustomSidebar />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/org" element={<Updateorg />} />
      <Route path="/" element={<SignUp/>} />
      <Route path="*" element={<PageNotFound />} />
      
    </Routes>
    </BrowserRouter>
  );
}
export default App;


