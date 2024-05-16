import React from "react";
import requests from "../APIs/AuthManager";
import orgrequests from "../APIs/Organizations";
import Swal from "sweetalert2";
let organizations = await requests.GetOrganizations();
const ChooseOrganization = () => {

  const handleJoin = async () => {
    let orgs = document.querySelectorAll(".organizationCheckbox");
    let choosedOrgs = [];
    for (let i = 0; i < orgs.length; i++) {
      if (orgs[i].checked) {
        choosedOrgs.push(orgs[i]);
      }
    }
    for (let i = 0; i < choosedOrgs.length; i++) {
      let success = await orgrequests.JoinOrganization(choosedOrgs[i].id);
      if (!success) {
        Swal.fire({
          title: "خطا",
          text: "ارسال در خواست با شکست مواجه شد!",
          icon: "error"
        });
        return;
      }
      Swal.fire({
        title: "درخواست موفق",
        text: "درخواست عضویت شما با موفقیت ارسال شد!",
        icon: "success"
      });
    }
  };
  return (
    <>
      <div className="content-center border border-sky-800 rounded py-4 my-20">
        <div className="max-w-sm mx-auto">
          <label
            htmlFor="countries_multiple"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            <svg
              className="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              style={{ display: "inline-block" }}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 4h12M6 4v16M6 4H5m13 0v16m0-16h1m-1 16H6m12 0h1M6 20H5M9 7h1v1H9V7Zm5 0h1v1h-1V7Zm-5 4h1v1H9v-1Zm5 0h1v1h-1v-1Zm-3 4h2a1 1 0 0 1 1 1v4h-4v-4a1 1 0 0 1 1-1Z"
              />
            </svg>
            سازمان مورد نظر خود را انتخاب نمایید
          </label>
          <div
            className="border border-sky-800 rounded p-1"
            style={{ maxHeight: "300px", overflowY: "scroll" }}
          >
            {organizations[0].id === 0 ? (
              <p className="p-1 text-red-600">{organizations[0].name}</p>
            ) : (
              organizations.map((item) => (
                <div className="bg-gray-300 p-1 rounded my-2" key={item.id}>
                  {item.name}
                  <input
                    key={item.id}
                    type="checkbox"
                    id={item.id}
                    value="true"
                    className="organizationCheckbox w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 my-1"
                    style={{ float: "left" }}
                  />
                </div>
              ))
            )}
          </div>
          <div className="mt-2 mx-36">
            <button
              className="w-full bg-sky-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={handleJoin}
            >
              تایید
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseOrganization;
