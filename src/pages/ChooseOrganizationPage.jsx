import ChooseOrganization from "../components/ChooseOrganization";
import Navbarparent from "../components/navbarparent";
const ChooseOrganizationPage = () => {

    return (
      <div dir="rtl">
        <Navbarparent/>
          <div className="px-5 pt-5">
            <div><ChooseOrganization/></div>
            
          </div>
      </div>
    );
}

export default ChooseOrganizationPage;