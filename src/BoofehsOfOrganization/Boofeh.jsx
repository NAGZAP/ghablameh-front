import React, { useState } from 'react';
import styles from "./Boofeh.module.css";
import axios from 'axios';
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
function Boofeh({ searchTerm, onSearchChange }) {
  //model
  const [showModel, setShowModel] = useState(false);
  const onClose = () => {
    setShowModel(false);
  };

  const handleOnClose = (e) => {
    if (e.target.id === "close") onClose();
  };

  //data for backend
  const [name, setName] = useState('');
  const [buffetData, setBuffetData] = useState({
    name: '',
  });
  const handleAddBuffet = (event) => {
    setBuffetData({ ...buffetData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Retrieve token
    const token = 'JWT ' + localStorage.getItem("token");

    // Send form data
    try {
      const response = await axios.post('https://ghablameh.fiust.ir/api/v1/buffet/', buffetData, {
        headers: {
          'Authorization': token
        }
      });

      if (response.status === 200) {
        console.log('Form submitted successfully');
        setShowModel(false);
      } else {
        const errorData = response.data;
        console.log('Form submission failed:', errorData);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  function addBuffet() {
    return (
      <div id='close' onClick={handleOnClose} className={`${styles['modal-me']} fixed `}>
        <div className={`bg-white rounded p-2 ${styles['modal-content']}`} >
          <div className='flex flex-row justify-end'>
            <button onClick={onClose} className={`${styles['close-button-me']} text-sm`}>X</button>
          </div>
          <div style={{ width: "400px" }}>
            <div className="max-w-2xl px-4 ">
              <h2 className="mb-2 text-xl font-bold text-gray-900 text-center">افزودن بوفه</h2>
              <form onSubmit={handleSubmit} className={`${styles['border-t']}`}>
                <div className="sm:col-span-2 p-3">
                  <label className={`${styles['text-right']} block mb-2 text-sm text-gray-90`}>نام بوفه</label>
                  <input name="name" onChange={handleAddBuffet} className="text-gray-900 rounded-md block w-full p-2.5" style={{ border: '1px solid #000000' }} />
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <button type="submit" className={`${styles['submit-button-me']} text-white text-center`}>ذخیره</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
    <Navbar/>
      <div className='flex flex-col'>
        <form className="mt-52 max-w-md mx-auto items-center">
          <div className={styles.search}>
            <label htmlFor="default-search" className="text-sm font-medium text-template-custom-white sr-only dark:text-template-custom-white" style={{ width: '30rem' }}>
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-template-custom-white dark:text-template-custom-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 ps-10 text-sm text-gray-1 border border-gray-500 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-template-custom-orange focus:border-transparent placeholder-template-custom-gray text-gray-500 dark:bg-template-custom-gray dark:border-template-custom-blue dark:placeholder-white dark:text-white dark:focus:ring-2 dark:focus:border-transparent"
                placeholder="بوفه شرکت مورد نظر ..."
                value={searchTerm}
                onChange={onSearchChange}
              />
            </div>
          </div>
        </form>
        <div className='flex items-center justify-center'>
          <button onClick={() => setShowModel(true)} className={styles.button} type="button">
            <a href="#">افزودن بوفه</a>
          </button>
        </div>
      </div>
      {showModel && addBuffet()}
{/* <Footer/> */}
    </>
  );
}

export default Boofeh;