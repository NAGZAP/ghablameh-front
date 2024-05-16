import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ChooseOrganization from "../components/ChooseOrganization";
import DefaultSidebar from '../components/Sidebar';
const ChooseOrganizationPage = () => {

    return (
      <div dir="rtl">
        <Navbar />
          <div className="px-5 pt-5">
            <div><ChooseOrganization/></div>
            
          </div>
        <Footer />
      </div>
    );
}

export default ChooseOrganizationPage;