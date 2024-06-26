/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/footer";
import Update from "./components/info";
import Register from "./components/org";
import SignUp from "./SignUp/SignUp";
import CustomSidebar from "./components/Sidebar";
import PageNotFound from "./components/pagenotfound";
import Updateorg from "./components/updateorg";
import Login from "./components/login";
import ListOfJoinRequests from "./components/listofrequests";
import OrgPage from "./OrgPage/OrgPage";
import ChooseOrganizationPage from "./pages/ChooseOrganizationPage";
import Myorgs from "./pages/Myorgs";
import UserSlider from "./components/UserSlider";
import WeeklyMenuPage from "./pages/WeeklyMenu";
import HomeOrgPage from "./HomePageForOrg/HomePage";
import Response from "./Response/Response";
import Home from "./components/homepage";
import MyComponent from './listorg/listorg';
import Panel from "./components/panel";
import ForgetPasswordWindow from "./forgetpassword/ForgetPasswordWindow";
import WeeklyMenu from "./components/weeklymenu";
import ReservationCalendar from "./components/lastreservation";
import EmailVerify from "./EmailVerify/EmailVerify";
import UserWallet from "./components/wallet";
import Navbarparent from "./components/navbarparent";
import Notificationbox from "./components/Notificationbox";
import OrganizationList from "./components/organizationlist";
import Boofeh from "./BoofehsOfOrganization/Boofeh";
import Reserve from "./components/reserve";
import DataFromApiList from "./BoofehsOfOrganization/DataFromApiList";
// import AddWeeklyMenu from "./addweeklybyadmin/addweeklybyadmin";
import Verify from "./components/verify";
import AddWeeklyMenu from "./components/addweeklybyadmin";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/Update" element={<Update />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/Register" element={<Register />} /> */}
        <Route path="/sidebar" element={<CustomSidebar />} />
        <Route path="/navbar" element={<Navbarparent />} />
        <Route path="/Updateorg" element={<Updateorg />} />
        <Route path="/bu" element={<MyComponent />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/HomeOrgPage" element={<HomeOrgPage />} /> */}
        <Route path="/ListOfJoinRequests" element={<ListOfJoinRequests />} />
        <Route path="/OrgPage" element={<OrgPage />} />
        <Route path="/chooseorg" element={<ChooseOrganizationPage />} />
        <Route path="/Myorgs" element={<Myorgs />} />
        <Route path="/slider" element={<UserSlider />} />
        <Route path="/WeeklyMenu" element={<WeeklyMenuPage />} />
        <Route path="/Response" element={<Response />} />
        <Route path="/panel" element={<Panel />} />
        <Route path="/weeklymenu2" element={<WeeklyMenu />} />
        <Route path="/last" element={<ReservationCalendar />} />
        <Route path="/forgetpassword" element={<ForgetPasswordWindow />} />
        <Route path="/EmailVerify" element={<EmailVerify />} />
        <Route path="/boofeh" element={<Boofeh />} />
        <Route path="/byadmin" element={<AddWeeklyMenu />} />
        <Route path="/organizationList" element={<OrganizationList />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/Notif" element={<Notificationbox />} />
        <Route path="/Reserve" element={<Reserve />} />
        <Route path="/ReviewOnBoofeh" element={<DataFromApiList />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/addweeklymenu" element={<AddWeeklyMenu />} />

      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;