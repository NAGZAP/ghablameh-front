import React from "react";

const WeeklyMenuTable = () => {
  return (
  <div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
  <div className="container mx-auto mt-10">
    <div className="wrapper bg-white rounded  shadow w-full ">
      <div className="header flex justify-center border-b p-2">
        <span className="text-lg font-bold">
          جدول غذایی
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
                  <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
                    <span className="event-name">
                      Meeting
                    </span>
                    <span className="time">
                      12:00~14:00
                    </span>
                  </div>
                  <div className="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
                    <span className="event-name">
                      Meeting
                    </span>
                    <span className="time">
                      18:00~20:00
                    </span>
                  </div>
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
                  <div className="event bg-blue-400 text-white rounded p-1 text-sm mb-1">
                    <span className="event-name">
                      Shopping
                    </span>
                    <span className="time">
                      12:00~14:00
                    </span>
                  </div>
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
