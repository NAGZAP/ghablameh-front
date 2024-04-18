import React, { useState } from 'react';
import { XIcon, CheckIcon } from '@heroicons/react/solid';
import Avatar from 'react-avatar';
import CustomSidebar from './Sidebar';
import Navbar from './Navbar';
import Footer from './footer';
function JoinRequestsList() {
  const [approved, setApproved] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [requests, setRequests] = useState([
    { buffet: 'buffet1', id: 1, firstName: 'John', lastName: 'Doe', avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png' },
    { buffet: 'buffet2', id: 2, firstName: 'Jane', lastName: 'Smith', avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png' },
    { buffet: 'buffet3', id: 3, firstName: 'Alice', lastName: 'Johnson', avatar: '' },
  ]);

  const handleCheckClick = (user) => {
    setApproved([...approved, user]);
    setRequests(requests.filter((request) => request.id !== user.id));
  };

  const handleCrossClick = (user) => {
    setRejected([...rejected, user]);
    setRequests(requests.filter((request) => request.id !== user.id));
  };

  const logListsIfEmpty = () => {
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
      // position: 'absolute',
      // top: 0,
      right: 0
    }} className="w-64 text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white m-2 ml-auto" >
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
                <div style={{ backgroundColor: 'rgb(38, 87, 124)', color: 'white', borderRadius: '5px' }} className="rounded p-1 mx-5">
                  {user.buffet}
                </div>
                <div className="flex items-center">
                  <XIcon className="h-6 w-6 cursor-pointer ml-2" style={{ color: 'rgb(38, 87, 124)' }} onClick={() => handleCrossClick(user)} />
                  <CheckIcon className="h-6 w-6 cursor-pointer ml-2" style={{ color: 'rgb(38, 87, 124)' }} onClick={() => handleCheckClick(user)} />
                </div>
              </div>
            </li>
          ))}
        </ul>

        
      )}
      {requests.length === 0 && logListsIfEmpty()}
    </div>
  );

  return (
    <div>
      <Navbar />
      <CustomSidebar />
      {listofuserrequests()}
      <Footer />
    </div>
  );
}

export default JoinRequestsList;