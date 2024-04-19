import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import ChooseOrganization from "../components/ChooseOrganization";
import CustomSidebar from "../components/Sidebar";
const ChooseOrganizationPage = () => {

    return (
      <div dir="rtl">
        <Navbar />
          <div className="grid grid-cols-12">
            <div className="col-span-2">
              <CustomSidebar />
            </div>
            <div></div>
            <div className="col-span-8">
              <ChooseOrganization/>
            </div >
            <div>
            </div>
          </div>
        <Footer />
      </div>
    );
}

export default ChooseOrganizationPage;