import React, { useState, useEffect } from 'react';
import styles from '../styles/updateinfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import LoginRequest from "../APIs/Login"
import Navbarparent from './navbarparent';
import Footer from './footer';
const Update = () => {
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [formErrors, setFormErrors] = useState([]);
  const [token, setToken] = useState('');
  const [error, setError] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    
  const toggleCurrentPasswordVisibility = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = [];

    if (!birthdate) {
      errors.push('تاریخ تولد را وارد کنید');
    }

    if (!gender) {
      errors.push('جنسیت را انتخاب کنید');
    }

    if (!username) {
      errors.push('نام کاربری را وارد کنید');
    }

    if (!currentPassword) {
      errors.push('رمز عبور فعلی را وارد کنید');
    }

    if (!newPassword) {
      errors.push('رمز عبور جدید را وارد کنید');
    }

    if (!confirmPassword) {
      errors.push('تأیید رمز عبور جدید را وارد کنید');
    }

    if (newPassword !== confirmPassword) {
      errors.push('رمز عبور جدید و تأیید رمز عبور مطابقت ندارند');
    }


    if (errors.length > 0) {
      toast.error(errors.join('\n'));
      return;
    }

    const userData =
    {
      image_base64: avatar,
      gender: gender,
    birthdate: birthdate,
    first_name: firstName,
    last_name: lastName,
    username: username,
    email: email,
    phone_number: phoneNumber,
      
    };
    const passwordData = {
      old_password: currentPassword,
      new_password: newPassword,
    };
  

    try {
       console.log(userData);
      const token = 'JWT ' + localStorage.getItem("token");

      const response = await axios.put('https://ghablameh.fiust.ir/api/v1/clients/me/', userData, {
        headers: {
          'Authorization': token
        }
      });
      const responsePassword = await axios.post('https://ghablameh.fiust.ir/api/v1/clients/password/', passwordData, {
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
     
  const handleChange = (event) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e) => {
      let img = e.target.result;
      setAvatar(img);
    };
  };


  return (
    
    <div className={styles.bg}>
      <Navbarparent />
      <div className={styles.container}>
        <div className={styles.pattern}></div>
        <div className={styles.card}>
          <h2 className={styles.title}>به‌روزرسانی اطلاعات کاربر</h2>
          <form onSubmit={handleFormSubmit} className={styles.form}>
            {formErrors.length > 0 && (
              <div className={styles.errorContainer}>
                <ul className={styles.errorList}>
                  {formErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className={styles.formGroup}>
              <div className={styles.avatarimg}>
                <img src={avatar} className={styles.avatar} alt="" />
              </div>
            </div>
            <input type="file" onChange={handleChange} className={styles.fileinput} />
            <div className={styles.formGroup}>
              <label htmlFor="birthdate" className={styles.label}>
                تاریخ تولد
              </label>
              <input
                type="date"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="gender" className={styles.label}>
                جنسیت
              </label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className={styles.input}
                required
              >
                <option value="">انتخاب جنسیت</option>
                <option value="M">مرد</option>
                <option value="F">زن</option>
         
              </select>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="username" className={styles.label}>
                به‌روزرسانی نام کاربری
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="firstName" className={styles.label}>
                به‌روزرسانی نام
              </label>
              <input
                type="text"
                id="firstname"
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName" className={styles.label}>
                به‌روزرسانی نام خانوادگی
              </label>
              <input
                type="text"
                id="lastname"
                value={lastName}
                onChange={(e) => setlastName(e.target.value)}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phoneNumber" className={styles.label}>
                به روز رسانی شماره تلفن
              </label>
              <input
                type="text"
                id="phonenumber"
                value={phoneNumber}
                onChange={(e) => setphoneNumber(e.target.value)}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>
                به روزرسانی ایمیل
              </label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
                required
              />
            </div>
     
            <div className={styles.formGroup}>
              <label htmlFor="currentPassword" className={styles.label}>
                رمز عبور فعلی
              </label>
              <div className={styles.passwordInputContainer}>
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className={styles.input}
                  required
                />
                <FontAwesomeIcon
                  icon={showCurrentPassword ? faEyeSlash : faEye}
                  className={styles.passwordIcon}
                  onClick={toggleCurrentPasswordVisibility}
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="newPassword" className={styles.label}>
                رمز عبور جدید
              </label>
              <div className={styles.passwordInputContainer}>
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className={styles.input}
                  required
                />
                <FontAwesomeIcon
                  icon={showNewPassword ? faEyeSlash : faEye}
                  className={styles.passwordIcon}
                  onClick={toggleNewPasswordVisibility}
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="confirmPassword" className={styles.label}>
                تأیید رمز عبور جدید
              </label>
              <div className={styles.passwordInputContainer}>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={styles.input}
                  required
                />
                <FontAwesomeIcon
                  icon={showConfirmPassword ? faEyeSlash : faEye}
                  className={styles.passwordIcon}
                  onClick={toggleConfirmPasswordVisibility}
                />
              </div>
            </div>
            <button type="submit" className={styles.submit}>
              ارسال
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
      <Footer />
    </div>
  );
};

export default Update;