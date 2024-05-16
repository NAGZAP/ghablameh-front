import React, { useEffect, useRef, useState } from "react";
import notifmanager from "../APIs/Notifications";
let alldata = (await notifmanager.GetAll());
let data = alldata.data;
let count = alldata.count;
const Notificationbox = () => {
  const Reads = useRef(null);
  const All = useRef(null);
  const content = useRef(null);
  const hanldeReads = () => {
    data = data.filter((m) => m.read == true);
    Reads.current.classList = "p-1 bg-sky-800 text-stone-100"
    All.current.classList = "p-1 bg-cyan-600 text-stone-100"
  };
  const handleAll = async () => {
    data = (await notifmanager.GetAll()).data; 
    Reads.current.classList = "p-1 bg-cyan-600 text-stone-100" // "p-1 bg-sky-800 text-stone-100"
    All.current.classList = "p-1 bg-sky-800 text-stone-100"
  };

  return (
    <div className="border border-sky-800 rounded" style={{ width: "100%" }}>
      <div className="grid grid-cols-2">
        <div
          ref={Reads}
          style={{
            borderLeft: "1px black solid",
            borderBottom: "1px solid black",
            cursor:"pointer"
          }}
          className="p-1 bg-sky-800 text-stone-100"
          onClick={hanldeReads}
        >
          خوانده شده ها
        </div>
        <div
          ref={All}
          className="p-1 bg-cyan-600 text-stone-100"
          style={{ borderBottom: "1px solid black" ,cursor:"pointer"}}
          onClick={handleAll}
        >
          همه
          <span
            className="bg-red-400 text-red-900 text-xs font-medium me-2 px-1 py-0.5 rounded dark:bg-gray-700 dark:text-red-400 border border-red-700 mx-2"
          >
            {count}
          </span>
        </div>
      </div>
      <div className="p-1 m-1" ref={content}>
        {data[0].id == 0 ? (
          <div className="text-stone-800 text-center">در حال حاضر اعلانی ندارید </div>
        ) : (
          data.map((m) => (
            <div className={m.read ? "bg-slate-300 p-2 mx-1 my-2 rounded" : "bg-slate-300 p-2 mx-1 my-2 rounded"}>
              <span>{m.title}</span>
              <p style={{ fontSize: "14px" }}>{m.message.slice(0, 10)}</p>
              <div className="grid grid-cols-2" style={{ fontSize: "12px" }}>
                <div>{m.created_at}</div>
                <div style={{ textAlign: "left" }}>{m.user}</div>
              </div>
            </div>
          ))
        )}
        {/* <div className="bg-slate-300 p-2 mx-1 my-2 rounded">
          <span>تایتل</span>
          <p style={{ fontSize: "14px" }}>
            متن تستی شماره 1 در سواحل امریکای شمالی کشوری که درد
          </p>
          <div className="grid grid-cols-2" style={{ fontSize: "12px" }}>
            <div>2020/01/01</div>
            <div style={{ textAlign: "left" }}>حسین خادم</div>
          </div>
        </div>
        <div className="bg-red-200 p-2 mx-1 my-2 rounded">
          <span>تایتل</span>
          <p style={{ fontSize: "14px" }}>
            متن تستی شماره 1 در سواحل امریکای شمالی کشوری که درد
          </p>
          <div className="grid grid-cols-2" style={{ fontSize: "12px" }}>
            <div>2020/01/01</div>
            <div style={{ textAlign: "left" }}>حسین خادم</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Notificationbox;
