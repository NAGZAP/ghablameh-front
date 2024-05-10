import { useState, useEffect, useRef } from 'react';
import Avatar from 'react-avatar';
import styles from '../styles/Navbar.module.css';
import isLoggedIn from '../APIs/AuthManager'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthManager from '../APIs/AuthManager';
import useMediaQuery from '@mui/material/useMediaQuery';
function Navbar() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [userData, setUserData] = useState(null);
  const isBigScreen = useMediaQuery('(min-width: 600px)');

  const navigate = useNavigate();

  //fetch user data
  useEffect(() => {
    const fetchUserData = async () => {
      try { 
        // https://jsonplaceholder.typicode.com/users/1
        const token = AuthManager.getToken();
       
        const response = await axios.get('https://ghablameh.fiust.ir/api/v1/clients/me/', {headers:{'Authorization':"JWT "+ token}});
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };
    fetchUserData();
  }, []);
  
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

  //log out
  async function handleLogout() {
    setIsDropdownOpen(false); // Close the dropdown menu on logout

    setUserData(null); // Clear user data
    localStorage.removeItem('token');
    localStorage.removeItem('refresh-token');
    console.log(AuthManager.isLoggedIn());
    navigate('/');
  }


  function UserAvatar() {
    if (AuthManager.isLoggedIn()) {
      return (
        <div className={`flex items-center p-1`}>
          {userData && userData.profilePicture ? (
            <img src={userData.profilePicture} alt="Profile" style={{ width: '50px', height: '50px', borderRadius: '50%' }} />
          ) : (
            <Avatar onClick={toggleDropdown} name={userData.first_name} size="60" round={true} maxInitials={1} />
          )}
        </div>
      );
    }
  }

  function Username() {
    if (AuthManager.isLoggedIn() && userData) {
      return (
        <h6 className={`${styles['vazir']} text-white`} style={{ marginLeft: '15px', fontSize: '20px' }}>{userData.first_name}</h6>
      );
    }
  }

  function LogInButton() {

    if (!AuthManager.isLoggedIn() ) {
      return (
        <div className={`flex justify-between items-center`}>
          <div style={{ marginRight: '10px' }}><Link to="/login" className={`text-white`} style={{ fontSize: '18px', fontFamily: 'vazir' }}>وارد شوید</Link></div>
          <div><h6 className={`text-white`} style={{ fontSize: '23px', fontFamily: 'vazir', marginRight: '10px' }}>/</h6></div>
          <div><Link to="/signup" className={`text-white`} style={{ fontSize: '18px', fontFamily: 'vazir' }}>ثبت نام کنید</Link></div>
        </div>
      );
    }
  }

  return (
    <nav style={{ backgroundColor: 'rgb(38, 87, 124)' }}>
          <div className={`flex justify-between m-2 items-center px-2`}>

            {/* Elements - Logo */}
            <div className={`flex items-center justify-end`}>
              <div className={`flex`}>
                <Link to='/' className={`items-center text-white`} style={{ fontSize: '35px', fontFamily: 'vazir' }} >قابلمه</Link>
              </div>
              {isBigScreen && (
                <div className={`flex items-center justify-end space-x-3`} style={{ paddingRight: '1.5vw' }}>
                  <Link to='/' className={`text-white`} style={{ fontSize: '1.3rem', margin: '0.7vw' }}>element1</Link>
                  <Link to='/' className={`text-white`} style={{ fontSize: '1.3rem', marginLeft: '0.5vw' }}>element2</Link>
                </div>
              )}

            </div>

            {/* Avatar, username and Login button */}
            <div ref={dropdownRef}>
              <div className={`flex justify-between items-center`}>
                {userData && (
                  <>
                    {Username(userData.username)}
                    {UserAvatar()}
                  </>
                )}
                {LogInButton()}
              </div>

              {/* Dropdown */}
              <div className={`absolute z-10 ${isDropdownOpen ? '' : 'hidden'} rounded-lg shadow`} style={{ backgroundColor: 'rgb(38, 87, 124)', margin: '0.3vw' }}>
                <ul className={`py-1 text-sm text-white`}>
                  <li><a className={`block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600`}>userpanel</a></li>
                  <li><a onClick={handleLogout} className={`block px-4 py-2 hover:bg-gray-800 dark:hover:bg-gray-600`}>Logout</a></li>
                </ul>
              </div>
            </div>
            
          </div>

    </nav>
  );
}

export default Navbar; 