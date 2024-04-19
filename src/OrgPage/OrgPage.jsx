import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './OrgPage.module.css';
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer';
import Navbar from '../components/Navbar.jsx';
import CustomSidebar from '../components/Sidebar';

function OrgPage() {
  const [peopleData, setPeopleData] = useState([]);

  useEffect(() => {
    // Define your API endpoint and token
    const API_ENDPOINT = 'https://ghablameh.fiust.ir/api/v1/buffets/';
    const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE2MDUxMzk4LCJpYXQiOjE3MTM0NTkzOTgsImp0aSI6IjBkYzBhMGFhN2VmNzQwMWE4ZjQzNzZjZmMyZDQzZmY1IiwidXNlcl9pZCI6MTh9.dF5OAekvQhkmz1fVPx7ZXJURXnpX70jk_woW33QH24U';

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
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  return (
    <div className={styles.containment_boof}>
      <Navbar />
      <div className={styles.itemscenter}>
        <table className="min-w-full divide-y bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3  text-xs font-bold text-template-custom-orange uppercase tracking-wider">بوفه</th>
              <th className="px-6 py-3  text-xs font-bold text-template-custom-orange uppercase tracking-wider">عملیات</th>
              <button className="m-2  px-4 py-2 font-medium text-white bg-orange-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">ساخت بوفه</button>
            </tr>
          </thead>
          <tbody className="min-w-full bg-white divide-y divide-gray-200">
            {peopleData.map(person => (
              <tr key={person.id}>
                <td className="px-6 py-4 whitespace-nowrap">{person.name}</td>

                <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                <button onClick={() => handleDelete(person.id)} className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default OrgPage;
