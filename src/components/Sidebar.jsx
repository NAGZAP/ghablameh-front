import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
export default function DefaultSidebar() {
  return (
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
        <MenuItem component={<Link to="/weeklymenu" />}>
          برنامه هفتگی سازمانی
        </MenuItem>
        <MenuItem component={<Link to="/last" />}>رزروها</MenuItem>
        <MenuItem component={<Link to="/myorgs" />}>درخواست های عضویت</MenuItem>
        <MenuItem component={<Link to="/chooseOrg" />}>درخواست عضویت</MenuItem>
      </Menu>
    </Sidebar>
  );
}
