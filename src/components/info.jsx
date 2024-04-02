import React, { useState } from 'react';
import styles from '../styles/updateinfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Update = () => {
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [username, setUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [avatar, setAvatar] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      // Handle password mismatch error
      return;
    }

    // Submit the form with all the data
    const formData = {
      birthdate,
      gender,
      username,
      currentPassword,
      newPassword,
      confirmPassword,
      avatar
    };

    // Perform form submission
    console.log(formData);
  };

  const handleChange = event => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = e => {
      let img = e.target.result;
      setAvatar(img);
    };
  };

  return (
    <div className={styles.container}>
      <div className={styles.pattern}></div>
      <div className={styles.card}>
        <h2 className={styles.title}>به‌روزرسانی اطلاعات کاربر</h2>
        <form onSubmit={handleFormSubmit} className={styles.form}>
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
              onChange={e => setBirthdate(e.target.value)}
              className={styles.input}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="gender" className={styles.label}>
              جنسیت
            </label>
            <select
              id="gender"
              value={gender}
              onChange={e => setGender(e.target.value)}
              className={styles.input}
            >
              <option value="">انتخاب جنسیت</option>
              <option value="مرد">مرد</option>
              <option value="زن">زن</option>
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
              onChange={e => setUsername(e.target.value)}
              className={styles.input}
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
                onChange={e => setCurrentPassword(e.target.value)}
                className={styles.input}
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
                onChange={e => setNewPassword(e.target.value)}
                className={styles.input}
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
                onChange={e => setConfirmPassword(e.target.value)}
                className={styles.input}
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
  );
};

export default Update;