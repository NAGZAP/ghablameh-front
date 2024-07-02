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
import Verify from "./components/verify";
import AddWeeklyMenu from "./components/addweeklybyadmin";
import "./App.css";
import AuthManager from "./APIs/AuthManager";
import { useEffect } from "react";
import { useState } from "react";
// 1== Org 2 == User 3 == no-log or sign
function App() {
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const fetchUserRole = async () => {
      const role = await AuthManager.orguser();
      setUserRole(role);
    };

    fetchUserRole();
  }, []);

  if (userRole === null) {
    return <div className="text-center"> در حال دریافت اطلاعات ... </div>;
  }
  //alert(userRole)
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        {/*<Route path="/footer" element={<Footer />} />*/}        
        {/* <Route path="/Update" element={<Update />} /> {/* User */} 
        {userRole === 2 && <Route path="/Update" element={<Update />} />}
        {/*<Route path="/login" element={<Login />} />  NoUser */}
        {userRole === 3 && <Route path = "/login" element={<Login />} />}
        {/* <Route path="/Register" element={<Register />} /> */}
        {/*<Route path="/sidebar" element={<CustomSidebar />} />*/}
        {/*<Route path="/navbar" element={<Navbarparent />} />*/}     
        {/*<Route path="/bu" element={<MyComponent />} />*/}  
        {/* <Route path="/HomeOrgPage" element={<HomeOrgPage />} /> */}   
        {/* <Route path="/Updateorg" element={<Updateorg />} /> Org */}
        {userRole === 1 && <Route path = "/Updateorg" element={<Updateorg />} />}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {userRole === 3 && <Route path = "/signup" element={<SignUp />} />}
        {/* <Route path="/ListOfJoinRequests" element={<ListOfJoinRequests />} /> admins */}
        {userRole === 1 && <Route path = "/ListOfJoinRequests" element={<ListOfJoinRequests />} />}
        {/* <Route path="/OrgPage" element={<OrgPage />} />  admins */}
        {userRole === 1 && <Route path = "/OrgPage" element={<OrgPage />} />}
        {/* <Route path="/chooseorg" element={<ChooseOrganizationPage />} /> User */}
        {userRole === 2 && <Route path = "/chooseorg" element={<ChooseOrganizationPage />} />}
        {/* <Route path="/Myorgs" element={<Myorgs />} />User */}
        {userRole === 2 && <Route path = "/Myorgs" element={<Myorgs />} />}
        {/* <Route path="/slider" element={<UserSlider />} /> */}
        {/* <Route path="/WeeklyMenu" element={<WeeklyMenuPage />} /> */}
        {/* <Route path="/Response" element={<Response />} /> */}
        {/* <Route path="/panel" element={<Panel />} /> */}
        {/* <Route path="/weeklymenu2" element={<WeeklyMenu />} /> admin */}
        {userRole === 1 && <Route path = "/weeklymenu2" element={<WeeklyMenu />} />}
        {/* <Route path="/last" element={<ReservationCalendar />} /> */}
        {/* <Route path="/forgetpassword" element={<ForgetPasswordWindow />} /> */}
        {/* <Route path="/EmailVerify" element={<EmailVerify />} /> non-user */}
        {userRole === 2 && <Route path = "/EmailVerify" element={<EmailVerify />} />}
        {/* <Route path="/boofeh" element={<Boofeh />} /> */}
        {/* <Route path="/byadmin" element={<AddWeeklyMenu />} /> admin */}
        {userRole === 1 && <Route path = "/byadmin" element={<AddWeeklyMenu />} />}
        {/* <Route path="/organizationList" element={<OrganizationList />} /> */}
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="/Notif" element={<Notificationbox />} /> */}
        {/* <Route path="/Reserve" element={<Reserve />} />user */}
        {userRole === 2 && <Route path = "/Reserve" element={<Reserve />} />}
        {/* <Route path="/ReviewOnBoofeh" element={<DataFromApiList />} />User */}
        {userRole === 2 && <Route path = "/ReviewOnBoofeh" element={<Reserve />} />}
        {/* <Route path="/verify" element={<Verify />} /> */}
        {/* <Route path="/addweeklymenu" element={<AddWeeklyMenu />} /> admin repeat of by admin!!!! */}
        {userRole === 1 && <Route path = "/addweeklymenu" element={<AddWeeklyMenu />} />}
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;