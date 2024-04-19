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
import InputField from './components/input';
import WeeklyMenu from './components/weeklymenu'
import CustomSidebar from './components/Sidebar'
import PageNotFound from './components/pagenotfound'
import Navbar from './components/Navbar'

import ReservationCalendar from './components/lastreservation'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/footer" element={<Footer />} />
      <Route path="/Update" element={<Update />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/sidebar" element={<CustomSidebar />} />
      <Route path="/navbar" element={<Navbar />} />
     
       <Route path="/menu" element={<WeeklyMenu />} />
       <Route path="/lastreservation" element={<ReservationCalendar />} />
       <Route path="/input" element={<InputField/>} />
      <Route path="/" element={<SignUp/>} />
      <Route path="*" element={<PageNotFound />} />
      
    </Routes>
    </BrowserRouter>
  );
}
export default App;


