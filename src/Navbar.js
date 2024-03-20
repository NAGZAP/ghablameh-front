import React, { useState, useEffect, useRef } from 'react';
import Avatar from 'react-avatar';
import './Navbar.css';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDropdownOpen(false); // Close the dropdown menu on logout
  };

  // const handleUserPanelClick = () => { 

  //   // if (isLoggedIn) { 
  //   window.location.href = '../public/index.html'; 
  //   handleLogin() 
      
  //   // } else {
  //   //   window.location.href = '../public/index.html'; 
  //   //   handleLogout() 

  //   //   };
  // };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  function UserProfile() {
    if (isLoggedIn) {
      return (
        <div className="user-profile flex items-center">
          <Avatar onClick={toggleDropdown} name="emma elise" size="60" round={true} maxInitials={1} />
          {/* <h6 className="text-white vazir" style={{ marginLeft: '15px', fontSize: '20px' }}>emma elise</h6> */}
              
        </div>
      );
    } else {
      return (
        <button onClick={handleLogin} className="login-button">Login / Sign Up</button>
      );
    }
  }
function Usernamee(){
  if (isLoggedIn) {
    return (
    <h6 className="text-white vazir" style={{ marginLeft: '15px', fontSize: '20px' }}>emma elise</h6>
    )          
  }
  }

  return (
    <nav className="navbar-design border">
      <div className="px-3">
        <div className="flex justify-between m-2 items-center">
          <div className="flex items-center">
            <div ref={dropdownRef}>
              <div className="flex justify-between items-center">
                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" type="button">
                  {UserProfile()}
                </button>
                {Usernamee()}
                </div>
              <div id="dropdownHover" className={`absolute z-10 ${isDropdownOpen ? '' : 'hidden'} bg-peach divide-y rounded-lg shadow w-44 dark:bg-gray-700`}>
                <ul className="py-2 text-sm text-white" aria-labelledby="dropdownDefaultButton">
                  <li><a className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600">userpanel</a></li>
                  <li><a href="../public/index.html" onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600">Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="flex items-center justify-end space-x-3 elements-me">
              <a href="../public/index.html" id="GFG" className="fantasyfont text-white hover:text-blue-900" style={{ fontSize: '20px' }}>element1</a>
              <a href="../public/index.html" id="GFG" className="fantasyfont text-white hover:text-blue-900" style={{ fontSize: '20px' }}>element2</a>
            </div>
            <div className="flex justify-end">
              <a href="../public/index.html" className="items-center text-white farsifont" style={{ fontSize: '35px', fontFamily: 'vazir' }} id="GFG">قابلمه</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;