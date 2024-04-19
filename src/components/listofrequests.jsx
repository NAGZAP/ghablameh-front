import { useState, useEffect } from 'react';
import { XIcon, CheckIcon } from '@heroicons/react/solid';
import Avatar from 'react-avatar';
import CustomSidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './footer';
import styles from '../styles/listofrequests.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ListOfJoinRequests() {
  const [approved, setApproved] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [requests, setRequests] = useState([
    { buffet: 'buffet1', id: 1, firstName: 'John', lastName: 'smith', avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png' },
    { buffet: 'buffet2', id: 2, firstName: 'Jane', lastName: 'Smith', avatar: 'https://p1.hiclipart.com/preview/743/500/3/circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-png-clipart.jpg' },
    { buffet: 'buffet3', id: 3, firstName: 'jacob', lastName: 'eliise', avatar: '' },
    { buffet: 'buffet1', id: 4, firstName: 'John', lastName: 'smith', avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png' },
    { buffet: 'buffet2', id: 5, firstName: 'Jane', lastName: 'Smith', avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png' },
    { buffet: 'buffet3', id: 6, firstName: 'loralie', lastName: 'eliise', avatar: '' },

  ]);

  // model
  // const [showMyModel, setShowMyModel] = useState(false);

  // const onClose = () => {
  //   setShowMyModel(false);
  // };
  // const handleOnClose = (e) => {
  //   if (e.target.id === "close") onClose();
  // };

  // function crossModal(user) {
  //   // setShowMyModel(true);
  //   handleCrossClick(user)
  //   return (
  //     <div>
  //       <h3>hi</h3>
  //     </div>
  //   );
  // };

  //fetch list of requests

  // Retrieve token
  const token = 'JWT ' + localStorage.getItem("token");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://ghablameh.fiust.ir/api/v1/clients/join-requests/', {
          headers: {
            'Authorization': token
          }
        });
        setRequests(response.data);
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };
    fetchUserData();
  }, [token]);


  //patch requests
  const handleaccept = (user) => {
    setApproved([...approved, user]);
    setRequests(requests.filter((request) => request.id !== user.id));
    toast.dismiss()
  };

  const handlereject = (user) => {
    setRejected([...rejected, user]);
    setRequests(requests.filter((request) => request.id !== user.id));
    toast.dismiss()
  };

  const crossToast = (user) => {
    toast.info(
      <div className="flex flex-col items-center">
        <div className="text-center mb-4"> آیا از رد کردن این درخواست مطمئن هستید؟</div>
        <div className="flex justify-center space-x-4">
          <button style={{ background: '#ff5e14' }} className="text-white font-bold py-1 px-3 rounded" onClick={() => handlereject(user)}> بله </button>
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
        icon: false,
      }
    );
  };

  const checkToast = (user) => {
    toast.info(
      <div className="flex flex-col items-center">
        <div className="text-center mb-4"> آیا از قبول کردن این درخواست مطمئن هستید؟</div>
        <div className="flex justify-center space-x-4">
          <button style={{ background: '#ff5e14' }} className="text-white font-bold py-1 px-3 rounded" onClick={() => handleaccept(user)}> بله </button>
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
        icon: false,
      }
    );
  };

  const listofuserrequests = () => (
    <div style={{
      border: '1px solid rgb(38, 87, 124)',
      borderRadius: '8px',
      width: '50vw',
    }} className="w-64  font-medium text-gray-900 bg-white rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800  text-center pt-3 pb-2 pr-3" style={{ borderBottom: '1px solid rgb(38, 87, 124)' }}> لیست درخواست ها </h2>
      {requests.length > 0 && (
        <ul className="w-full">
          {requests.map((user, index) => (
            <li key={index} style={{ borderBottom: index === requests.length - 1 ? 'none' : '1px solid rgb(38, 87, 124)' }} className="px-4 py-2">
              <div className="flex items-center p-2 flex-row justify-between">
                <div className="flex items-center">
                  {user.avatar ? (
                    <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} className="h-10 w-10 rounded-full" />
                  ) : (
                    <Avatar name={`${user.firstName} ${user.lastName}`} size={40} round={true} maxInitials={1} />
                  )}
                  <div className="ml-2 text-base">
                    <div style={{ fontSize: '1.2rem' }}>{user.firstName} {user.lastName}</div>
                  </div>
                </div>
                <div style={{ backgroundColor: 'rgb(38, 87, 124)', color: 'white', borderRadius: '5px', height: '35px', width: '65px' }} className="rounded p-1 mx-5 flex  items-center justify-center">
                  {user.buffet}
                </div>
                <div className="flex items-center">
                  <XIcon className="h-7 w-7 cursor-pointer ml-2" style={{ color: 'rgb(38, 87, 124)' }} onClick={() => crossToast(user)} />
                  <CheckIcon className="h-7 w-7 cursor-pointer ml-2" style={{ color: 'rgb(38, 87, 124)' }} onClick={() => checkToast(user)} />
                </div>
              </div>
            </li>
          )

          )}
          {/* {showMyModel && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div id="close" onClick={handleOnClose} className={`${styles['modal-me']} bg-white rounded p-2`} style={{ position: 'absolute' }}>
                <div className="flex flex-col items-center">
                  <div className="text-center mb-4">آیا از قبول کردن این درخواست مطمئن هستید؟</div>
                  <div className="flex justify-center space-x-4">
                    <button style={{ background: '#ff5e14' }} className="text-white font-bold py-1 px-3 rounded" onClick={() => handlereject(user)}>بله</button>
                    <button style={{ background: 'rgb(38, 87, 124)' }} className="text-white font-bold py-1 px-3 rounded" onClick={() => setShowMyModel(false)}>خیر</button>
                  </div>
                </div>
              </div>
            </div>
          )} */}
        </ul>
      )}

      {requests.length == 0 && (
        <ul className="w-full">
          <h3 className="text-xl font-light text-gray-800 pt-3 pb-2 pr-3 text-right p-6 m-2">.درخواستی برای اضافه شدن به بوفه وجود ندارد</h3>

        </ul>
      )}


    </div>
  );

  return (
    <div className={`${styles['main-content']} flex flex-col`}>
      <Navbar />
      <div className='flex flex-row'>
        <CustomSidebar />
        <div className='flex flex-grow justify-center items-center'>
          {listofuserrequests()}
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default ListOfJoinRequests;