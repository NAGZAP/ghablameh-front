import React from "react";
// Initialization for ES Users
import { Offcanvas, Ripple, initTWE } from "tw-elements";

initTWE({ Offcanvas, Ripple });
import { Link } from "react-router-dom";
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
const CustomSidebar = () => {
  return (
    <>
      <button
        className="me-1.5 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        type="button"
        data-twe-offcanvas-toggle
        data-twe-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        data-twe-ripple-init
        data-twe-ripple-color="light"
      >
        Toggle right offcanvas
      </button>

      <div
        className="invisible fixed bottom-0 right-0 top-0 z-[1045] flex w-96 max-w-full translate-x-full flex-col border-none bg-white bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out data-[twe-offcanvas-show]:transform-none dark:bg-body-dark dark:text-white"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        data-twe-offcanvas-init
      >
        <div className="flex items-center justify-between p-4">
          <h5
            className="mb-0 font-semibold leading-normal"
            id="offcanvasRightLabel"
          >
            Offcanvas right
          </h5>
          <button
            type="button"
            className="box-content rounded-none border-none text-neutral-500 hover:text-neutral-800 hover:no-underline focus:text-neutral-800 focus:opacity-100 focus:shadow-none focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
            data-twe-offcanvas-dismiss
            aria-label="Close"
          >
            <span className="[&>svg]:h-6 [&>svg]:w-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </span>
          </button>
          <div className="w-96 bg-black-400"></div>
        </div>
        <div className="offcanvas-body flex-grow overflow-y-auto p-4">...</div>
      </div>
    </>
  );
};

export default CustomSidebar;
