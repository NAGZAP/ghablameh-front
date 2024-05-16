import DefaultSidebar from "./userPanelSidebar"
import Footer from "../components/footer"
import Navbarparent from "../components/navbarparent";
function UserPage() {
    return (
        <>
            <Navbarparent />
            <DefaultSidebar/>
            <Footer/>
        </>
    );
}

export default UserPage;