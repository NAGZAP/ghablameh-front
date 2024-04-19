import React, { useState , useEffect} from 'react';
import axios from 'axios';
import styles from '../styles/org.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [organizationName, setOrganizationName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleOrganizationNameChange = (e) => {
    setOrganizationName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      organization_name: organizationName,
      username,
      password,
      email,
      first_name: firstName || undefined,
      last_name: lastName || undefined,
      phone_number: phoneNumber || undefined,
    };

    try {
      const token = "jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE2MDk1Nzk2LCJpYXQiOjE3MTM1MDM3OTYsImp0aSI6ImI2YzY2NmMzMzA0MDQ4OWNiOTU4MjU0ZGYwMjZiZGNiIiwidXNlcl9pZCI6MTd9.S13ehZA_19i0EtLWlKuT8sPrKgElj1pfAikrV6iC55Q";
    
      const response = await axios.post('https://ghablameh.fiust.ir/api/v1/organizations/register/', userData, {
        headers: {
          'Authorization': token
        }
      });
    
      if (response.status === 200) {
        console.log('Form submitted successfully');
      } else {
        setError('Form submission failed: ' + response.data.message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.pattern}></div>
      <div className={styles.card}>
        <h2 className={styles.title}>ثبت نام سازمان</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>
              ایمیل
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>
              نام کاربری مدیر
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="organizationName" className={styles.label}>
              نام سازمان
            </label>
            <input
              type="text"
              id="organizationName"
              value={organizationName}
              onChange={handleOrganizationNameChange}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="currentPassword" className={styles.label}>
              رمز عبور
            </label>
            <div className={styles.passwordInputContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="currentPassword"
                value={password}
                onChange={handlePasswordChange}
                className={styles.input}
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className={styles.passwordIcon}
                onClick={togglePasswordVisibility}
              />
            </div>
    
          <div className={styles.formGroup}>
            <label htmlFor="firstName" className={styles.label}>
             نام ادمین
            </label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={handleFirstNameChange}
              className={styles.input}
            />
          </div>
     
          <div className={styles.formGroup}>
            <label htmlFor="lastName" className={styles.label}>
              نام خانوادگی ادمین 
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={handleLastNameChange}
              className={styles.input}
            />
            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber" className={styles.label}>
                شماره تلفن ادمین
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className={styles.input}
              />
            </div>
            <button type="submit" className={styles.button}>
              ثبت نام
            </button>
            </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  
  export default Register;