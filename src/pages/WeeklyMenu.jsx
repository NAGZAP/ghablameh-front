// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/footer";
// import WeeklyMenuTable from "../components/WeeklyMenuTable";
// const WeeklyMenuPage = async () => {
//   return (
//     <>
//       <Navbar />
//       <div className=""></div>
//       <div style={{ width: "100%" }} className="px-5 py-3">
//         <div className="grid grid-cols-3 my-4 text-center">
//           <button className="scale-90 bg-template-custom-blue hover:bg-template-custom-orange text-white font-medium py-2 rounded-2xl ml-20 border-none cursor-pointer mt-1 mb-1">
//             <svg
//               className="w-6 h-6 text-white dark:text-white"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="none"
//               viewBox="0 0 24 24"
//               style={{ display: "inline" }}
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m9 5 7 7-7 7"
//               />
//             </svg>
//             قبلی
//           </button>
//           <div className="border border-sky-800 rounded-lg px-5 py-3">
//             <svg
//               className="w-6 h-6 text-gray-800 dark:text-white"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="none"
//               viewBox="0 0 24 24"
//               style={{ display: "inline" }}
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
//               />
//             </svg>
//             هفته جاری
//           </div>
//           <button className="scale-90 bg-template-custom-blue hover:bg-template-custom-orange text-white font-medium py-2 rounded-2xl mr-20 border-none cursor-pointer mt-1 mb-1" style={{ direction: "ltr" }}>

//             <svg
//               className="w-6 h-6 text-white dark:text-white"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="none"
//               viewBox="0 0 24 24"
//               style={{ display: "inline" }}
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="m15 19-7-7 7-7"
//               />
//             </svg>
//             بعدی
//           </button>
//         </div>
//         <WeeklyMenuTable />
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default WeeklyMenuPage;
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import WeeklyMenuTable from "../components/WeeklyMenuTable";
import BuffetsDropdown from "../components/ChooseBuffet";
const WeeklyMenuPage = () => {
  return (
    <>
      <Navbar />
      <div className=""></div>
      <div style={{ width: "100%" }} className="px-5 py-3">
        <div className="grid grid-cols-3 my-4 text-center">
          <button className="scale-90 bg-template-custom-blue hover:bg-template-custom-orange text-white font-medium py-2 rounded-2xl ml-20 border-none cursor-pointer mt-1 mb-1">
            <svg
              className="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              style={{ display: "inline" }}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m9 5 7 7-7 7"
              />
            </svg>
            قبلی
          </button>
          <div className="border border-sky-800 rounded-lg px-5 py-3">
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              style={{ display: "inline" }}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
              />
            </svg>
            هفته جاری
          </div>
          <button
            className="scale-90 bg-template-custom-blue hover:bg-template-custom-orange text-white font-medium py-2 rounded-2xl mr-20 border-none cursor-pointer mt-1 mb-1"
            style={{ direction: "ltr" }}
          >
            <svg
              className="w-6 h-6 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              style={{ display: "inline" }}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>
            بعدی
          </button>
        </div>
        <BuffetsDropdown />
        <WeeklyMenuTable />
      </div>
      <Footer />
    </>
  );
};

export default WeeklyMenuPage;
