import React from "react";
import style from './Sidebar.module.css';
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { Flowbite } from "flowbite-react";
const CustomSidebar = () => {
  const customTheme = {
    span: {
      color: {
        primary: "bg-red-500 hover:bg-red-600",
      },
    },
  }
  return (
    <>
      <Flowbite theme={customTheme}>
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            {/* Modify the className prop to change background color */}
            <Sidebar.ItemGroup className="bg-orange-500">
              {" "}
              {/* Change bg-orange-500 to your desired color */}
              <Sidebar.Item href="#" icon={HiChartPie} className="text-sky-50">
                داشبورد
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiViewBoards}
                label="Pro"
                labelColor="dark"
                className="text-sky-50"
              >
                تست
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiInbox}
                label="3"
                className="text-sky-50"
              >
                تست
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser} className="text-sky-50">
                تست
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiShoppingBag}
                className="text-sky-50"
              >
                تست
              </Sidebar.Item>
              <Sidebar.Item
                href="#"
                icon={HiArrowSmRight}
                className="text-sky-50"
              >
                {/* <Link to="/Login">ورود</Link> */}
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable} className="text-sky-50">
                {/* <Link to="/Signup">ثبت نام</Link> */}
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </Flowbite>
    </>
  );
};

export default CustomSidebar;
