import React from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

const CustomSidebar = () => {
  return (<>
    <Sidebar aria-label=" Default sidebar example" style={{ position: 'absolute', right: 0, zIndex: '3' }} >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          
          <Sidebar.Item icon={HiViewBoards}>
            <Link to='/Update'>تغییر اطلاعات</Link>
          </Sidebar.Item>
          <Sidebar.Item icon={HiInbox}>
            پنل کاربری
          </Sidebar.Item>
          <Sidebar.Item icon={HiInbox}>
            <Link to='/WeeklyMenu'> برنامه غذایی </Link>
          </Sidebar.Item>
          
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  </>)
}

export default CustomSidebar;