import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './OrgPage.module.css';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import OrgSidebar from '../components/orgPanelSidebar.jsx';
import Navbarparent from '../components/navbarparent.jsx';

function OrgPage() {
  const [peopleData, setPeopleData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newBuffetName, setNewBuffetName] = useState('');
  const [editBuffet, setEditBuffet] = useState(null);
  const [editBuffetName, setEditBuffetName] = useState('');
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [deleteBuffetId, setDeleteBuffetId] = useState(null);

  // Define your API endpoint and token
  const API_ENDPOINT = 'https://ghablameh.fiust.ir/api/v1/buffets/';
  const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3MTYxODEzLCJpYXQiOjE3MTQ1Njk4MTMsImp0aSI6ImQxZTM5Y2I4Yzk3ODQxMGFiYjA0NTVkN2U2M2QwMWUwIiwidXNlcl9pZCI6Mn0.CUEgrbFFFKgk5sy7VfqlKaWVqqg5Gv6hSbDZdrIbetA';

  useEffect(() => {
    // Axios request configuration
    const axiosConfig = {
      headers: {
        'Authorization': `JWT ${TOKEN}`
        // Add other headers as needed
      }
    };

    // Fetch data using Axios when the component mounts
    axios.get(API_ENDPOINT, axiosConfig)
      .then(response => {
        // Update state with fetched data
        setPeopleData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleDeleteConfirmation = (id) => {
    setDeleteBuffetId(id);
    setDeleteConfirmation(true);
  };

  const handleDelete = () => {
    // Define your delete endpoint
    const deleteEndpoint = `${API_ENDPOINT}${deleteBuffetId}/`;

    // Axios request configuration for delete operation
    const axiosConfig = {
      headers: {
        'Authorization': `JWT ${TOKEN}`
        // Add other headers as needed
      }
    };

    // Send delete request using Axios
    axios.delete(deleteEndpoint, axiosConfig)
      .then(response => {
        // If delete is successful, update state to remove the deleted entity
        setPeopleData(prevData => prevData.filter(person => person.id !== deleteBuffetId));
        // Close the delete confirmation modal
        setDeleteConfirmation(false);
      })
      .catch(error => {
        console.error('Error deleting data:', error);
      });
  };

  const handleCreateBuffet = () => {
    // Define the data to be sent in the POST request
    const postData = {
      name: newBuffetName
    };

    // Axios request configuration for create operation
    const axiosConfig = {
      headers: {
        'Authorization': `JWT ${TOKEN}`,
        'Content-Type': 'application/json'
        // Add other headers as needed
      }
    };

    // Send POST request using Axios
    axios.post(API_ENDPOINT, postData, axiosConfig)
      .then(response => {
        // If creation is successful, update state with the new buffet
        setPeopleData(prevData => [...prevData, response.data]);
        // Reset the input field and close the modal
        setNewBuffetName('');
        setShowModal(false);
      })
      .catch(error => {
        console.error('Error creating buffet:', error);
      });
  };

  const handleEdit = () => {
    // Define the endpoint for editing the buffet
    const editEndpoint = `${API_ENDPOINT}${editBuffet.id}/`;

    // Define the data to be sent in the PUT request
    const putData = {
      name: editBuffetName
      // Add other fields as needed
    };

    // Axios request configuration for edit operation
    const axiosConfig = {
      headers: {
        'Authorization': `JWT ${TOKEN}`,
        'Content-Type': 'application/json'
        // Add other headers as needed
      }
    };

    // Send PUT request using Axios
    axios.put(editEndpoint, putData, axiosConfig)
      .then(response => {
        // If edit is successful, update state with the edited buffet
        setPeopleData(prevData => prevData.map(buffet => buffet.id === editBuffet.id ? response.data : buffet));
        // Reset the state and close the modal
        setEditBuffet(null);
        setEditBuffetName('');
        setShowModal(false);
      })
      .catch(error => {
        console.error('Error editing buffet:', error);
      });
  };
  const hanleclickjadval = (person) => {
    localStorage.setItem("Boofeh" , person.name);
  };
  return (
    <div className=''>
      <div className=''>
        <div className={styles.containment_boof}>
        <div className={styles.app}>
          <Navbarparent />
          <div className='flex flex-row justify-between items-center'>
          <OrgSidebar/>
          <div className={`${styles.itemscenter} flex-grow`}>
            {showModal && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>
                  <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                  <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                            {editBuffet ? 'ویرایش بوفه' : 'ساخت بوفه جدید'}
                          </h3>
                          <div className="mt-2">
                            <input
                              type="text"
                              value={editBuffet ? editBuffetName : newBuffetName}
                              onChange={(e) => editBuffet ? setEditBuffetName(e.target.value) : setNewBuffetName(e.target.value)}
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              placeholder="نام بوفه جدید"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                      <button onClick={editBuffet ? handleEdit : handleCreateBuffet} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-600 text-base font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm">
                        {editBuffet ? 'ویرایش' : 'ایجاد'}
                      </button>
                      <button onClick={() => setShowModal(false)} type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:mt-0 sm:w-auto sm:text-sm">
                        لغو
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Delete Confirmation Modal */}
            {deleteConfirmation && (
              <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <div className="fixed inset-0 transition-opacity">
                    <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                  </div>
                  <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                  <div className="inline-block align-middle bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                      <div className="sm:flex sm:items-start">
                        <div className="text-center sm:mt-0 sm:ml-4 sm:text-left">
                          <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">آیا مطمئن هستید؟</h3>
                          <div className="mt-2">
                            <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">حذف</button>
                            <button onClick={() => setDeleteConfirmation(false)} className="mx-2 px-4 py-2 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">لغو</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className={styles.transform}>
              <div className='m-10 grid lg:grid-cols-5 md:grid-cols-5 mt-5 mb-5'>
                <div className='lg:col-start-2 lg:col-span-3 md:col-start-2 md:col-span-3 '>
                  <table className="table-auto min-w-full bg-white bg-opacity-60 rounded-lg divide-y divide-template-custom-orange">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-xs font-bold text-template-custom-orange uppercase tracking-wider">بوفه</th>
                        <th className="px-6 py-3 text-xs font-bold text-template-custom-orange uppercase tracking-wider">عملیات</th>
                        <th className="px-6 py-3 text-xs font-bold text-template-custom-orange uppercase tracking-wider">
                          <button onClick={() => setShowModal(true)} className="m-2 px-4 py-2 font-medium text-white bg-orange-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">ساخت بوفه</button>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-template-custom-blue">
                      {peopleData.map(person => (
                        <tr key={person.id}>
                          {/* Column 1: Person Name */}
                          <td className="px-6 py-4 whitespace-nowrap">{person.name}</td>

                          {/* Column 2: Operation Buttons */}
                          <td className="px-6 py-4 whitespace-nowrap">
                            {/* Edit Button */}
                            <button onClick={() => { setEditBuffet(person); setEditBuffetName(person.name); setShowModal(true); }} className="px-2 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">ویرایش</button>

                            {/* Table Button */}
                            <Link to="/weeklymenu2">
                            <button onClick={() => {hanleclickjadval(person)}} className="ml-2 mr-2 px-2 py-2 font-medium text-white bg-gray-600 rounded-md hover:bg-gray-500 focus:outline-none focus:shadow-outline-blue active:bg-gray-600 transition duration-150 ease-in-out">جدول</button>
                            </Link>
                            {/* Delete Button */}
                            <button onClick={() => handleDeleteConfirmation(person.id)} className="ml-2 px-2 py-2 font-medium text-white bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">حذف</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            </div>
          </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default OrgPage;
