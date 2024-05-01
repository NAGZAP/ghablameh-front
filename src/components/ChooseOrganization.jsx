import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import requests from "../APIs/AuthManager";
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
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              style={{display:"inline-block"}}
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"
              />
            </svg>
            سازمان مورد نظر خود را انتخاب نمایید
          </label>
          <select
            multiple
            id="countries_multiple" // bg-sky-800 text-orange-50 p-2.5
            class=" border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {organizations.map((item) => (
              <option value={item.id} key={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          <div className="mt-2 mx-36">
            <button
              type="submit"
              className="w-full bg-sky-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            >
              تایید
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ChooseOrganization;
