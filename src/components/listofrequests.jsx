import { useState } from 'react';
import { XIcon, CheckIcon } from '@heroicons/react/solid';
import Avatar from 'react-avatar';

function JoinRequestsList() {
  const [approved, setApproved] = useState([]);
  const [rejected, setRejected] = useState([]);
  const [requests, setRequests] = useState([
    { id: 1, firstName: 'John', lastName: 'Doe', avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', avatar: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png' },
    { id: 3, firstName: 'Alice', lastName: 'Johnson', avatar: '' },
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

  return (
    <div>
      {requests.length > 0 && (
        <ul style={{ border: '1px solid rgb(38, 87, 124)', borderRadius: '8px' }} className="w-64 text-sm font-medium text-gray-900 bg-white rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white m-2">
          {requests.map((user, index) => (
            <li key={index} style={{ borderBottom: index === requests.length - 1 ? 'none' : '1px solid rgb(38, 87, 124)' }} className="w-full px-4 py-2">
              <div className="flex items-center">
                {user.avatar ? (
                  <img src={user.avatar} alt={`${user.firstName} ${user.lastName}`} className="h-8 w-8 rounded-full" />
                ) : (
                  <Avatar name={`${user.firstName} ${user.lastName}`} size={32} round={true} maxInitials={1} />
                )}
                <div className="ml-2">
                  <p>{user.firstName} {user.lastName}</p>
                </div>
                <XIcon className="h-5 w-5 cursor-pointer ml-auto" style={{ color: 'rgb(38, 87, 124)' }} onClick={() => handleCrossClick(user)} />
                <CheckIcon className="h-5 w-5 cursor-pointer ml-2" style={{ color: 'rgb(38, 87, 124)' }} onClick={() => handleCheckClick(user)} />
              </div>
            </li>
          ))}
        </ul>
      )}
      {requests.length === 0 && logListsIfEmpty()} 
    </div>
  );
}

export default JoinRequestsList;