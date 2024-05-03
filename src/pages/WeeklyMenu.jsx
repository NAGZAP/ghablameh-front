import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import WeeklyMenuTable from "../components/WeeklyMenuTable";
const WeeklyMenuPage = () => {
  return (
    <>
      <Navbar />
      <div style={{ width: "100%" }} className="px-5 py-3">
        <div className="grid grid-cols-3 my-4 text-center">
          <button>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
          </button>
          <div className="border border-sky-800 px-5 py-3">هفته جاری</div>
          <button style={{direction:"ltr"}}>
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <WeeklyMenuTable />
      </div>
      <Footer />
    </>
  );
};

export default WeeklyMenuPage;
