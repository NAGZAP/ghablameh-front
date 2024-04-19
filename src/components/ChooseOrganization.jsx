import React from "react";
import requests from '../APIs/AuthManager';
let organizations = await requests.GetOrganizations();
const ChooseOrganization = () => {
  return (
    <>
      <div className="content-center border border-sky-800 rounded py-4 my-20">
        <form class="max-w-sm mx-auto">
          <label
            for="countries_multiple"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            سازمان مورد نظر خود را انتخاب نمایید
          </label>
          <select
            multiple
            id="countries_multiple" // bg-sky-800 text-orange-50 p-2.5
            class=" border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {
              organizations.data.map(item => <option value={item.id}>{item.name}</option>)
            }
          </select>
          <div className="mt-2 mx-36">
            <button type="submit" className="w-full bg-sky-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">تایید</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChooseOrganization;
