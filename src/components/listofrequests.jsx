import { useState, useEffect } from 'react';
import { XIcon, CheckIcon } from '@heroicons/react/solid';
import Avatar from 'react-avatar';
import Navbar from './Navbar';
import Footer from './footer';
import styles from '../styles/listofrequests.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useMediaQuery from '@mui/material/useMediaQuery';
import OrgSidebar from './orgPanelSidebar'
import Navbarparent from './navbarparent';
function ListOfJoinRequests() {
  const [approved, setApproved] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [IsSelectedUser, setIsSelectedUser] = useState(false)
  const isBigScreen = useMediaQuery('(min-width: 600px)')
  const [requests, setRequests] = useState([]);
  // const [requests, setRequests] = useState([
  //   { buffet: 'buffet1', id: 1, firstName: 'John', lastName: 'smith', status: 'p', avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png' },
  //   { buffet: 'buffet2', id: 2, firstName: 'Jane', lastName: 'Smith', status: 'p', avatar: 'https://p1.hiclipart.com/preview/743/500/3/circle-silhouette-logo-user-user-profile-green-facial-expression-nose-cartoon-png-clipart.jpg' },
  //   { buffet: 'buffet3', id: 3, firstName: 'jacob', lastName: 'eliise', status: 'p', avatar: '' },
  //   { buffet: 'buffet1', id: 4, firstName: 'John', lastName: 'smith', status: 'p', avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png' },
  //   { buffet: 'buffet2', id: 5, firstName: 'Jane', lastName: 'Smith', status: 'p', avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png' },
  //   { buffet: 'buffet3', id: 6, firstName: 'loralie', lastName: 'eliise', status: 'p', avatar: '' },

  // ]);

  //fetch list of requests
  const token = 'JWT ' + localStorage.getItem("token");
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://ghablameh.fiust.ir/api/v1/organizations/join-requests/', {
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

    const updatedUser = { ...user, status: 'A' };

    setRequests(requests.filter((request) => request.id !== user.id));
    setApproved([...approved, updatedUser]);
    const token = 'JWT ' + localStorage.getItem("token");
    // const token='JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE2MTI5NDU4LCJpYXQiOjE3MTM1Mzc0NTgsImp0aSI6IjM5ZGQ3ZWZhZGIyNzRhZDZhN2RlY2I4ZTNjNGQwNmU4IiwidXNlcl9pZCI6MzF9.vaM70ID3rWsWzmYSRt6aNT48cqK9iTt5wLLMAQNWzYk'

    const url = 'https://ghablameh.fiust.ir/api/v1/organizations/join-requests/' + user.id + '/'

    try {
      const response = axios.patch(url, { status: 'A' }, {
        headers: {
          'Authorization': token
        }
      });
      if (response.status === 200) {
        console.log('formData submitted successfully');
      } else {
        const errorData = response.json();
        console.log('formData submission failed:', errorData);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
    toast.dismiss()
  };

  const handlereject = () => {
    console.log(IsSelectedUser)
    const updatedUser = { ...IsSelectedUser, status: 'R' };

    console.log(IsSelectedUser)
    setRejected([...rejected, updatedUser]);
    setRequests(requests.filter((request) => request.id !== IsSelectedUser.id));

    const token = 'JWT ' + localStorage.getItem("token");
    const url = 'https://ghablameh.fiust.ir/api/v1/organizations/join-requests/' + IsSelectedUser.id + '/'

    try {
      const response = axios.patch(url, { status: 'R' }, {
        headers: {
          'Authorization': token
        }
      });

      if (response.status === 200) {
        console.log('formData submitted successfully');
      } else {
        console.log('formData submission failed:', response.data);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }

    setShowMyModel(false);
  };

  // yes toast
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

  //no model
  const [showMyModel, setShowMyModel] = useState(false);

  const onClose = () => {
    setShowMyModel(false);
  };
  const handleOnClose = (e) => {
    if (e.target.id === "close") onClose();
  };

  const handleOpenModal = (user) => {
    console.log(user)
    setShowMyModel(true)
    setIsSelectedUser(user)
  }

  const ListOfUserRequests = () => (
    <div style={{ border: '1px solid rgb(38, 87, 124)', borderRadius: '8px', width: '50vw', }} className="w-64  font-medium text-gray-900 bg-white rounded-lg">
      <h2 className="text-xl font-semibold text-gray-800  text-center pt-3 pb-2 pr-3" style={{ borderBottom: '1px solid rgb(38, 87, 124)' }}> لیست درخواست ها </h2>



      {isBigScreen && requests.length > 0 && (
        <ul className="w-full">
          {requests.map((user, index) => (
            <li key={index} style={{ borderBottom: index === requests.length - 1 ? 'none' : '1px solid rgb(38, 87, 124)' }} className="px-4 py-2">
              <div className="flex items-center p-2 flex-row justify-between">
                <div className="flex items-center">
                  <CheckIcon className="h-7 w-7 cursor-pointer ml-2" style={{ color: 'rgb(38, 87, 124)' }} onClick={() => checkToast(user)} />
                  <XIcon className="h-7 w-7 cursor-pointer ml-2" style={{ color: 'rgb(38, 87, 124)' }} onClick={() => handleOpenModal(user)} />

                </div>
                <div style={{ backgroundColor: 'rgb(38, 87, 124)', color: 'white', borderRadius: '5px', height: '35px', width: '65px' }} className="rounded p-1 mx-5 flex  items-center justify-center">
                  {user.buffet}
                </div>
                <div className="flex items-center">
                  <div className="ml-2 text-base">
                    <div style={{ fontSize: '1.2rem' }}>{user.firstName} {user.lastName}</div>
                  </div>
                  {user.avatar ? (
                    <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} className="h-10 w-10 rounded-full" />
                  ) : (
                    <Avatar name={`${user.firstName} ${user.lastName}`} size={40} round={true} maxInitials={1} />
                  )}

                </div>


              </div>
            </li>
          )
          )}
        </ul>
      )}
      {!isBigScreen && requests.length > 0 && (
        <ul className="w-full">
          {requests.map((user, index) => (
            <li key={index} style={{ borderBottom: index === requests.length - 1 ? 'none' : '1px solid rgb(38, 87, 124)' }} className="px-4 py-2">
              <div className="flex items-center p-2 flex-row justify-between">
                <div className="flex items-center">
                  <CheckIcon className="h-6 w-6 cursor-pointer ml-2" style={{ color: 'rgb(38, 87, 124)' }} onClick={() => checkToast(user)} />
                  <XIcon className="h-6 w-6 cursor-pointer ml-2" style={{ color: 'rgb(38, 87, 124)' }} onClick={() => handleOpenModal(user)} />

                </div>
                <div style={{ backgroundColor: 'rgb(38, 87, 124)', color: 'white', borderRadius: '5px', height: '35px', width: '65px' }} className="rounded p-1 mx-5 flex  items-center justify-center">
                  {user.buffet}
                </div>
                <div className="flex items-center">
                  <div className="ml-2 text-base">
                    <div style={{ fontSize: '1.2rem' }}>{user.firstName} {user.lastName}</div>
                  </div>

                </div>


              </div>
            </li>
          )
          )}
        </ul>
      )}

      {requests.length == 0 && (
        <ul className="w-full">
          <h3 className="text-xl font-light text-gray-800 pt-3 pb-2 pr-3 text-right p-6 m-2">درخواستی برای اضافه شدن به بوفه وجود ندارد</h3>
        </ul>
      )}

      {showMyModel && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div id="close" onClick={handleOnClose} className={`${styles['modal-me']} bg-white rounded p-2`} style={{ position: 'absolute' }}>
            <div className="flex flex-col items-center">
              <div className="text-center mb-4">آیا از قبول کردن این درخواست مطمئن هستید؟</div>
              <div className="flex justify-center space-x-3">
                <div className='mx-2'>
                  <button style={{ background: 'rgb(38, 87, 124)' }} className="text-white font-bold py-1 px-3 rounded" onClick={() => setShowMyModel(false)}>خیر</button>
                </div>
                <div className='mx-2'><button style={{ background: '#ff5e14' }} className="text-white font-bold py-1 px-3 rounded" onClick={() => handlereject()}>بله</button>
                </div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <div className={`${styles['main-content']} flex flex-col`}>
        <Navbarparent />
        <div className='flex flex-row'>

          <OrgSidebar />
          <div className='flex flex-grow justify-center items-center m-3'>
            {ListOfUserRequests()}
          </div>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
}

export default ListOfJoinRequests;