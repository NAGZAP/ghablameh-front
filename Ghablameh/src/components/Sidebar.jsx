import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
const CustomSidebar = () => {
return (<>
   <Sidebar aria-label="Default sidebar example" className="bg-blue-900">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie} className="text-sky-50">
            داشبورد
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards} label="Pro" labelColor="dark" className="text-sky-50">
            تست
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox} label="3" className="text-sky-50">
            تست
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser} className="text-sky-50">
          تست
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag} className="text-sky-50">
          تست
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiArrowSmRight} className="text-sky-50">
            <Link to="/Login">ورود</Link>
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiTable} className="text-sky-50">
          <Link to="/Signup">ثبت نام</Link>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
</>)
}

export default CustomSidebar;