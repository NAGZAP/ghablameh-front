// import React, { useRef, useState, useEffect } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/footer";
// import styles from "../styles/updateinfo.module.css";
// import organizationsRequest from '../APIs/Organizations';
// // console.log(gottenOrgs);
// const Myorgs = async () => {
//   let gottenOrgs = await organizationsRequest.GetMyOrganizations();
//   const [orgs, setOrgs] = useState(gottenOrgs);
//   const [filteredOrgs, setFilteredOrgs] = useState(gottenOrgs);
//   const searchdata = useRef(null);

//   const handleSearch = () => {
//     const filtered = orgs.filter((item) =>
//       item.name.toLowerCase().includes(searchdata.current.value.toLowerCase())
//     );
//     setFilteredOrgs(filtered);
//   };
//   const renderedData = (<>          {filteredOrgs.map((item) => (
//     <div key={filteredOrgs.indexOf(item)} className="border border-sky-800 rounded p-2 my-2">
//       <div className="grid grid-cols-2">
//         <div>
//           <p>نام سازمان : {item.organization_name}</p>
//         </div>
//         <div>وضعیت : 
//           <span className={(item.status == 'P' ? 'bg-yellow-100' : item.status == 'A' ? 'bg-green-200' : 'bg-red-400')+" text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"}>
//           {item.status == 'P' ? 'درحال بررسی' : item.status == 'A' ? 'تایید شده' : 'رد شده'}
//           </span>
//         </div>
//       </div>
//       <div className="text-cnter my-2 mt-5">
//         <div>
//           <p style={{direction:"ltr"}}>تاریخ درخواست : {item.created_at.slice(0,10)}</p>
//         </div>
//       </div>
//     </div>
//   ))}</>);
//   return (
//     <>
//       <Navbar />
//       <div className="border border-sky-800 mx-2 my-5 p-2">
//         <div className="grid grid-cols-12">
//           <div className="col-span-10">
//             <input
//               ref={searchdata}
//               type="text"
//               className={styles.input}
//               placeholder="جست و جو ..."
//             />
//           </div>
//           <div className="col-span-2">
//             <button
//               onClick={handleSearch}
//               className="w-full bg-sky-800 hover:bg-blue-700 text-white font-bold py-2 px-4 "
//             >
//               جست و جو
//             </button>
//           </div>
//         </div>
//         <div className="grid grid-cols-3 gap-1">
//           {filteredOrgs[0].id == 0 ?<><div></div><p className="text-red-600 text-center my-5" style={{fontSize:"24px"}}> سازمانی یافت نشد ! </p><div></div></>: renderedData}
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Myorgs;
import React, { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/updateinfo.module.css";
import organizationsRequest from '../APIs/Organizations';
import Navbarparent from "../components/navbarparent";
const Myorgs = () => {
  const [orgs, setOrgs] = useState([]);
  const [filteredOrgs, setFilteredOrgs] = useState([]);
  const searchData = useRef(null);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const gottenOrgs = await organizationsRequest.GetMyOrganizations();
        setOrgs(gottenOrgs);
        setFilteredOrgs(gottenOrgs);
      } catch (error) {
        console.error('Error fetching organizations:', error);
      }
    };
    fetchOrganizations();
  }, []);

  const handleSearch = () => {
    const filtered = orgs.filter((item) =>
      item.organization_name.toLowerCase().includes(searchData.current.value.toLowerCase())
    );
    setFilteredOrgs(filtered);
  };

  return (
    <div>
      <Navbarparent/>
      <div className={` mx-2 my-5 p-2`}>
        <div className=" flex items-center justify-center flex-col">
        <div className="grid grid-cols-12 flex items-center justify-center" style={{width:'50%'}}>
          <div className="col-span-10">
            <input
              ref={searchData}
              type="text"
              className={`${[styles.input]} rounded-lg`}
              placeholder="جست و جو ..."
            />
          </div>
          <div className="col-span-2 m-2">
            <button
              onClick={handleSearch}
              className="w-full bg-sky-800 hover:bg-blue-700 text-white font-bold px-4 rounded-lg"
              style={{paddingTop:'0.6175rem',paddingBottom:'0.6175rem'}}
            >
              جست و جو
            </button>
          </div>
        </div>
        </div>
        <div className="grid grid-cols-3 gap-1 mx-3 my-6">
          {filteredOrgs.length === 0 ? (
            <p className="text-red-600 text-center my-5" style={{ fontSize: "24px" }}>
              سازمانی یافت نشد!
            </p>
          ) : (
            filteredOrgs.map((item) => (
              <div
                key={item.id}
                className="border border-sky-800 rounded-lg p-2 my-2 m-2"
              >
                <div className="grid grid-cols-2">
                  <div>
                    <p>نام سازمان : {item.organization_name}</p>
                  </div>
                  <div>
                    وضعیت :
                    <span
                      className={`text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:text-green-300 m-3 ${
                        item.status === 'P'
                          ? 'bg-yellow-100'
                          : item.status === 'A'
                          ? 'bg-green-200'
                          : 'bg-red-400'
                      }`}
                    >
                      {item.status === 'P'
                        ? 'درحال بررسی'
                        : item.status === 'A'
                        ? 'تایید شده'
                        : 'رد شده'}
                    </span>
                  </div>
                </div>
                <div className="text-center my-2 mt-5">
                  <p style={{ direction: "ltr" }}>
                    تاریخ درخواست : {item.created_at.slice(0, 10)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Myorgs;