import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import styles from "../styles/updateinfo.module.css";
import organizationsRequest from '../APIs/Organizations';
let gottenOrgs = organizationsRequest.GetMyOrganizations();
const Myorgs = () => {
  const [orgs, setOrgs] = useState(gottenOrgs);
  const [filteredOrgs, setFilteredOrgs] = useState([ {name : "test"}]);
  const searchdata = useRef(null);

  const handleSearch = () => {
    const filtered = orgs.filter((item) =>
      item.name.toLowerCase().includes(searchdata.current.value.toLowerCase())
    );
    setFilteredOrgs(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="border border-sky-800 mx-2 my-5 p-2 ">
        <div className="grid grid-cols-12">
          <div className="col-span-10">
            <input
              ref={searchdata}
              type="text"
              className={styles.input}
              placeholder="جست و جو ..."
            />
          </div>
          <div className="col-span-2">
            <button
              onClick={handleSearch}
              className="w-full bg-sky-800 hover:bg-blue-700 text-white font-bold py-2 px-4 "
            >
              جست و جو
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {filteredOrgs.map((item) => (
            <div key={filteredOrgs.indexOf(item)} className="border border-sky-800 rounded p-2 my-2">
              <div className="grid grid-cols-2">
                <div>
                  <p>{item.name}</p>
                </div>
                <div>
                  <span class="bg-green-100 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                    تاییده شده
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div>
                  <p>تاریخ درخواست : 2020/1/1</p>
                </div>
                <div>وضعیت : در حال بررسی</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Myorgs;
