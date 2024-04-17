// import React, { useState } from 'react';
import styles from "./Boofeh.module.css";
import AddBuffet from '../components/addbuffet';
import { useModalState } from '../components/modalState';

function Boofeh({ searchTerm, onSearchChange }) {
  const { showMyModel, setShowMyModel } = useModalState();
  
  return (
    <>
      <form className="mt-52 max-w-md mx-auto items-center">
        <div className={styles.search}>
          <label htmlFor="default-search" className="text-sm font-medium text-template-custom-white sr-only dark:text-template-custom-white">
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

      {/* <div className="justify-center mt-0 mb-10 flex flex-col items-center">
        <button onClick={AddBuffet.onOpen} className={styles.button} type="button">
          <a href="#">افزودن بوفه</a>
        </button>
      </div> */}
      <button onClick={() => setShowMyModel(true)} className={styles.button} type="button">
     <a href="#">افزودن بوفه</a>
   </button>
      {showMyModel && <AddBuffet />}

    </>
  );
}

export default Boofeh;