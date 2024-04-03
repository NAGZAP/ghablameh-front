import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
const CustomSidebar = () => {
return (<>
   <Sidebar aria-label="Default sidebar example" className="bg-blue-900">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            داشبورد
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark">
            تست
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} label="3">
            تست
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
          تست
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
          تست
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight}>
            <Link to="/Login">ورود</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable}>
          <Link to="/Signup">ثبت نام</Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
</>)
}

export default CustomSidebar;