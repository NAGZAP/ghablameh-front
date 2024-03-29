import { useState, useEffect, useRef } from 'react';
import Avatar from 'react-avatar';
import '../styles/Navbar.css';
// import isLoggedIn from '../APIs/AuthManager'
import { Link } from 'react-router-dom';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  //dropdown
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  //log in log out
  const handleLogin = () => {
    setIsLoggedIn(true);

  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsDropdownOpen(false); // Close the dropdown menu on logout
  };

  function UserProfile() {
    if (!isLoggedIn) {
      return (
        <div className="user-profile flex items-center p-1">
          <Avatar onClick={toggleDropdown} name="emma elise" size="60" round={true} maxInitials={1} />
        </div>
      );
    }
  }

  function Username() {
    if (!isLoggedIn) {
      return (
        <h6 className="text-white vazir" style={{ marginLeft: '15px', fontSize: '20px' }}>emma elise</h6>
      )
    }
  }

  function LogInButton() {
    if (isLoggedIn) {
      return (
        <div className='flex justify-between items-center'>
          <div style={{ marginRight: '10px' }}><Link to="/" className='text-white' style={{ fontSize: '18px', fontFamily: 'vazir' }}>وارد شوید</Link></div>
          <div><h6 className='text-white' style={{ fontSize: '23px', fontFamily: 'vazir' , marginRight: '10px' }}>/</h6></div>
          <div><Link to="/" className='text-white' style={{ fontSize: '18px', fontFamily: 'vazir' }}>ثبت نام کنید</Link></div>
        </div>
      );
    }
  }

  return (
    <nav className="navbar-design ">
      <div className="px-3">
        <div className="flex justify-between m-2 items-center">
          <div className="flex items-center">

            <div ref={dropdownRef}>
              {/* Avatar, username and Login button */}
              <div className="flex justify-between items-center">
                {UserProfile()}
                {Username()}
                {LogInButton()}
              </div>

              {/* Dropdown */}
              <div className={`absolute z-10 ${isDropdownOpen ? '' : 'hidden'} rounded-lg shadow dropdown-me`}>
                <ul className="py-1 text-sm text-white">
                  <li><a className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600">userpanel</a></li>
                  <li><a href="#" onClick={handleLogout} className="block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600">Logout</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Elements - Logo */}
          <div className="flex items-center justify-end">
            <div className="flex items-center justify-end space-x-3 elements-me">
              <a href="../public/index.html" id="GFG" className="text-white hover:text-blue-900" style={{ fontSize: '20px' }}>element1</a>
              <a href="../public/index.html" id="GFG" className="text-white hover:text-blue-900" style={{ fontSize: '20px' }}>element2</a>
            </div>
            <div className="flex justify-end">
              <a href="../public/index.html" className="items-center text-white " style={{ fontSize: '35px', fontFamily: 'vazir' }} id="GFG">قابلمه</a>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar; 