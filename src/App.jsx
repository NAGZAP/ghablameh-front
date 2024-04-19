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
import Login from './components/login';
import Boofeh from "./BoofehsOfOrganization/Boofeh"
import Cards from "./BoofehsOfOrganization/Cards"
import DataFromApiList from "./BoofehsOfOrganization/DataFromApiList"
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/footer" element={<Footer />} />
      <Route path="/Update" element={<Update />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/sidebar" element={<CustomSidebar />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/" element={<Updateorg />} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/DataFromApiList" element={<DataFromApiList/>}/>
    </Routes>
    </BrowserRouter>
  );
}
export default App;

