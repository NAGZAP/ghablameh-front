import React, { useState, useEffect } from 'react';
import styles from '../styles/updateinfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import Navbar from './Navbar';
import Footer from './footer';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Update = () => {
  const [birthdate, setBirthdate] = useState('');
const [gender, setGender] = useState('');
const [username, setUsername] = useState('');
const [currentPassword, setCurrentPassword] = useState('');
const [newPassword, setNewPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [showPassword, setShowPassword] = useState('');
const [avatar, setAvatar] = useState('');
const [formErrors, setFormErrors] = useState([]);
const [token, setToken] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
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
      alert(errors.join('\n'));
      return;
    }

    const formData = {
      image_base64: avatar,
      gender: gender,
      birthdate: birthdate,
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
      phone_number: phoneNumber,
    };
  
    try {
      const response = await axios.put('https://ghablameh.fiust.ir/api/v1/client/me/', formData);
      const accessToken = response.data.tokens.access;
      localStorage.setItem('token', accessToken);
      navigate('/')
    console.log('Registration successful');
    } catch (error) {
      console.error('An error occurred:', error);
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
   <div>
       

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
              <option value="سایر">سایر</option>
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
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="lastName" className={styles.label}>
              به‌روزرسانی نام 
            </label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}>
  <label htmlFor="email" className={styles.label}>
    به‌روزرسانی ایمیل
  </label>
  <input
    type="email"
    id="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className={styles.input}
    required
  />
</div>

<div className={styles.formGroup}>
  <label htmlFor="phoneNumber" className={styles.label}>
    به‌روزرسانی شماره تلفن
  </label>
  <input
    type="tel"
    id="phoneNumber"
    value={phoneNumber}
    onChange={(e) => setPhoneNumber(e.target.value)}
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
                type={showPassword ? 'text' : 'password'}
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className={styles.input}
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className={styles.passwordIcon}
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="newPassword" className={styles.label}>
              رمز عبور جدید
            </label>
            <div className={styles.passwordInputContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className={styles.input}
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className={styles.passwordIcon}
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              تأیید رمز عبور جدید
            </label>
            <div className={styles.passwordInputContainer}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.input}
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className={styles.passwordIcon}
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>
          <button type="submit" className={styles.button}>
            ارسال
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Update;