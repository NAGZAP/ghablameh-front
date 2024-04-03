import React from "react";
import GetOrganizations from '../APIs/Organizations';
const ChooseOrganization = () => {
    let organizations = GetOrganizations();
  return (
    <>
      <div>
        <form class="max-w-sm mx-auto">
          <label
            for="countries_multiple"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            سازمان مورد نظر خود را انتخاب نمایید
          </label>
          <select
            multiple
            id="countries_multiple"
            class="bg-orange-600 border border-gray-300 text-orange-50 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {data.map(m => <option value={m.id}>m.name</option>)}
          </select>
        </form>
      </div>
    </>
  );
};

export default ChooseOrganization;
