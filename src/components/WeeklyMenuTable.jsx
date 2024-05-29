import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios";

 //post reserve
 const reserve = (user) => {

  const token = 'JWT ' + localStorage.getItem("token");
  // const token='JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE2MTI5NDU4LCJpYXQiOjE3MTM1Mzc0NTgsImp0aSI6IjM5ZGQ3ZWZhZGIyNzRhZDZhN2RlY2I4ZTNjNGQwNmU4IiwidXNlcl9pZCI6MzF9.vaM70ID3rWsWzmYSRt6aNT48cqK9iTt5wLLMAQNWzYk'

  const url = 'https://ghablameh.fiust.ir/api/v1/organizations/join-requests/'  + '/'

  try {
    const response = axios.patch(url, { status: 'A' }, {
      headers: {
        'Authorization': token
      }
    });
    if (response.status === 201) {
      console.log('food reserved successfully');
      checkToast()
    } else {
      const errorData = response.json();
      console.log('food reservation failed:', errorData);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
};
  //toast
  const checkToast = () => {
    toast.info(
      <div className="flex flex-col items-center">
        <div className="text-center mb-4"> رزرو با موفقیت ثبت شد </div>
      </div>,
      {
        position: 'top-center',
        autoClose: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        closeButton: true,
        icon: false,
      }
    );
  };

  const handleCheckboxChange = (event) => {
    // Check if the checkbox is checked
    if (event.target.checked) {
      // Call your toast function here
      checkToast();
    }
  };

const WeeklyMenuTable = () => {
  return (
    <div>
      {/* <div className="flex justify-center">
          <button  className="bg-template-custom-blue hover:bg-template-custom-orange text-white font-medium py-2 rounded-2xl mr-10 border-none cursor-pointer mt-1 mb-1" style={{ direction: "ltr", width: "10rem" }}>
            ثبت رزرو
          </button>
        </div> */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <div className="container mx-auto mt-10">
        <div className="wrapper bg-white rounded  shadow w-full ">
          <div className="header flex justify-center border-b p-2">
            <span className="text-lg font-bold">
              تاریخ ماه
            </span>
          </div>
          <table className="w-full">
            <thead>
              <tr>
                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">شنبه</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">شنبه</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">یکشنبه</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">یکشنبه</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">دوشنبه</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">دوشنبه</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">سه شنبه</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">سه شنبه</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">چهارشنبه</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">چهارشنبه</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">پنج شنبه</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">پنج شنبه</span>
                </th>
                <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span className="xl:block lg:block md:block sm:block hidden">جمعه</span>
                  <span className="xl:hidden lg:hidden md:hidden sm:hidden block">جمعه</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center h-20">
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray ">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">1</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                      {/* meeeeeeee */}
                      <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
                        <div className="flex flex-row justify-center items-center">

                          <span className="event-name">
                            meeting
                          </span>
                          <input type="checkbox" onChange={handleCheckboxChange} className="m-2"></input>
                        </div>
                        <span className="time">
                          22:00~18:00
                        </span>
                      </div>
{/* meeeeeeee */}
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">2</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">3</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">4</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">6</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">7</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer">
                      {/* meeeeeeee */}
                      <div className="event bg-blue-400 text-white rounded p-1 text-sm mb-1">
                        <div className="flex flex-row justify-center items-center">

                          <span className="event-name">
                            Shopping
                          </span>
                          <input type="checkbox" className="m-2"></input>
                        </div>



                        <span className="time">
                          12:00~14:00
                        </span>
                      </div>
{/* meeeeeeee */}
                    </div>
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black text-sm">8</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
              </tr>
              {/*         line 1 */}
              <tr className="text-center h-20">
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">9</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">10</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">12</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">13</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">14</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">15</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black text-sm">16</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
              </tr>
              {/*         line 1 */}
              {/*         line 2 */}
              <tr className="text-center h-20">
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">16</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">17</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">18</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">19</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">20</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">21</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black text-sm">22</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
              </tr>
              {/*         line 2 */}
              {/*         line 3 */}
              <tr className="text-center h-20">
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">23</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">24</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">25</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">26</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">27</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">28</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black text-sm">29</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
              </tr>
              {/*         line 3 */}
              {/*         line 4 */}
              <tr className="text-center h-20">
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">30</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">31</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">1</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">2</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">3</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black">4</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
                <td className="border bg-gray-100 p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-template-custom-gray">
                  <div className="flex flex-col h-40 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div className="top h-5 w-full">
                      <span className="text-black text-sm">5</span>
                    </div>
                    <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer" />
                  </div>
                </td>
              </tr>
              {/*         line 4 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default WeeklyMenuTable;
