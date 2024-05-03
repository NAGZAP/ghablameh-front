import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ChooseOrganization from "../components/ChooseOrganization";
import CustomSidebar from "../components/Sidebar";
const ChooseOrganizationPage = () => {

    return (
      <div dir="rtl">
        <Navbar />
          <div className="px-5 pt-5">
            <ChooseOrganization/>
          </div>
        <Footer />
      </div>
    );
}

export default ChooseOrganizationPage;