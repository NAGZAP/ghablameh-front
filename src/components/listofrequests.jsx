import React, { useState } from 'react';
import { XIcon, CheckIcon } from '@heroicons/react/solid';
import Avatar from 'react-avatar';
import CustomSidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './footer';
import styles from '../styles/listofrequests.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function JoinRequestsList() {
  const [approved, setApproved] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [requests, setRequests] = useState([
    { buffet: 'buffet1', id: 1, firstName: 'John', lastName: 'smith', avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png' },
    // { buffet: 'buffet2', id: 2, firstName: 'Jane', lastName: 'Smith', avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png' },
    // { buffet: 'buffet3', id: 3, firstName: 'Jake', lastName: 'eliise', avatar: '' },
  ]);

  const handleCheckClick = (user) => {
    setApproved([...approved, user]);
    setRequests(requests.filter((request) => request.id !== user.id));
    toast.dismiss()
  };

  const handleCrossClick = (user) => {
    setRejected([...rejected, user]);
    setRequests(requests.filter((request) => request.id !== user.id));
    toast.dismiss()
  };

  const crossToast = (user) => {
    toast.info(
      <div className="flex flex-col items-center">
        <div className="text-center mb-4"> آیا از رد کردن این درخواست  مطمئن هستید؟</div>
        <div className="flex justify-center space-x-4">
          <button style={{ background: '#ff5e14' }} className="text-white font-bold py-1 px-3 rounded" onClick={() => handleCrossClick(user)}> بله </button>
          <button style={{ background: 'rgb(38, 87, 124)' }} className="text-white font-bold py-1 px-3 rounded" onClick={() => toast.dismiss()}> خیر </button>
        </div>
      </div>,
      {
        position: 'top-center',
        autoClose: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        closeButton: true,
        icon: false
      }
    );
  };

  const checkToast = (user) => {
    toast.info(
      <div className="flex flex-col items-center">
        <div className="text-center mb-4"> آیا از قبول کردن این درخواست مطمئن هستید؟</div>
        <div className="flex justify-center space-x-4">
          <button style={{ background: '#ff5e14' }} className="text-white font-bold py-1 px-3 rounded" onClick={() => handleCheckClick(user)}> بله </button>
          <button style={{ background: 'rgb(38, 87, 124)' }} className="text-white font-bold py-1 px-3 rounded" onClick={() => toast.dismiss()}> خیر </button>
        </div>
      </div>,
      {
        position: 'top-center',
        autoClose: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        closeButton: true,
        icon: false
      }
    );
  };

  const send = () => {
    if (requests.length === 0) {
      console.log('Approved List:', approved);
      console.log('Rejected List:', rejected);
    }
  };

  const listofuserrequests = () => (
    <div style={{
      border: '1px solid rgb(38, 87, 124)',
      borderRadius: '8px',
      width: '24rem',
      position: 'absolute',
      top: 200,
      right: 0
    }} className="w-64 text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white m-2 ml-auto">
      <h2 className="text-xl font-semibold text-gray-800  text-right pt-3 pb-2 pr-3" style={{ borderBottom : '1px solid rgb(38, 87, 124)' }}> لیست درخواست ها </h2>
      {requests.length > 0 && (
        <ul className="w-full">
          {requests.map((user, index) => (
            <li key={index} style={{ borderBottom: index === requests.length - 1 ? 'none' : '1px solid rgb(38, 87, 124)' }} className="px-4 py-2">
              <div className="flex items-center p-2 flex-row justify-between">
                <div className="flex items-center">
                  {user.avatar ? (
                    <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} className="h-8 w-8 rounded-full" />
                  ) : (
                    <Avatar name={`${user.firstName} ${user.lastName}`} size={32} round={true} maxInitials={1} />
                  )}
                  <div className="ml-2 text-base">
                    <div>{user.firstName} {user.lastName}</div>
                  </div>
                </div>
                <div style={{ backgroundColor: 'rgb(38, 87, 124)', color: 'white', borderRadius: '5px', height: '30px', width: '60px' }} className="rounded p-1 mx-5 flex items-center justify-center">
                  {user.buffet}
                </div>
                <div className="flex items-center">
                  <XIcon className="h-6 w-6 cursor-pointer ml-2" style={{ color: 'rgb(38, 87, 124)' }} onClick={() => crossToast(user)} />
                  <CheckIcon className="h-6 w-6 cursor-pointer ml-2" style={{ color: 'rgb(38, 87, 124)' }} onClick={() => checkToast(user)} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}

{requests.length == 0 && (
        <ul className="w-full">
          <h3 className="text-xl font-light text-gray-800 pt-3 pb-2 pr-3 text-right p-6">درخواستی برای اضافه شدن به بوفه</h3>
          <h3 className="text-xl font-light text-gray-800  pt-3 pb-2 pr-3 text-right p-6"> .وجود ندارد</h3>
        </ul>
      )}
    </div>
  );

  return (
    <div className={`${styles['main-content']}`}>
      <Navbar />
      <CustomSidebar />
      {listofuserrequests()}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default JoinRequestsList;