import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import AuthManager from '../APIs/AuthManager';
import { useState, useEffect } from 'react';

export default function DefaultSidebar() {
  const [flag, setFlag] = useState(null);

    useEffect(() => {
        const checkUserType = async () => {
            const userType = await AuthManager.orguser();
            setFlag(userType);
            // console.log(userType)
        };

        checkUserType();
    }, []);
  
    const userSidebar=()=>{
      
    return(
      <Sidebar>
      <Menu
        menuItemStyles={{
          button: {
            ":hover": {
              color:"black",
              backgroundColor: "#EBE4D1"
            },
            color: "white",
          },
          root: {
            backgroundColor: "#26577C",
            opacity: "5",
          },
        }}
      >
        <MenuItem component={<Link to="/Update" />}>
          تغییر اطلاعات کاربری
        </MenuItem>
        <MenuItem component={<Link to="/weeklymenu2" />}>
          منو هفتگی بوفه
        </MenuItem>
        <MenuItem component={<Link to="/foodtable" />}>
          برنامه هفتگی سازمانی
        </MenuItem>
{/*         <MenuItem component={<Link to="/last" />}>رزروها</MenuItem>
 */}        
 <MenuItem component={<Link to="/myorgs" />}>درخواست های عضویت</MenuItem>
        <MenuItem component={<Link to="/chooseOrg" />}>درخواست عضویت</MenuItem>
      </Menu>
    </Sidebar>
    );
    }

    const adminSidebar=()=>{
      return(
        <Sidebar>
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color:"black",
                backgroundColor: "#EBE4D1"
              },
              color: "white",
            },
            root: {
              backgroundColor: "#26577C",
              opacity: "5",
            },
          }}
        >
          <MenuItem component={<Link to='/Updateorg'/>}>
        تغییر اطلاعات سازمان          
        </MenuItem>
          <MenuItem component={<Link to='/ListOfJoinRequests' />}>
          درخواست های عضویت 
          </MenuItem>
          <MenuItem component={<Link to='/orgpage' />}>
          مدیریت بوفه ها 
          </MenuItem>
        </Menu>
      </Sidebar>
      );
    }

  return (
    <div>
            {flag == 1 ? adminSidebar() : userSidebar()}
        </div>
  );
}
