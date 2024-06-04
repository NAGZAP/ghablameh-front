import React, { useState } from 'react';
import logo from '../assets/password.png';
import styles from '../listorg/home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const ForgetPasswordWindow = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    console.log("Submitting email:", email);
    const token = 'JWT ' + localStorage.getItem("token");

    try {
      const response = await axios.post('https://ghablameh.fiust.ir/api/v1/verification/forget_password/', { email }, {
       
      });
      console.log("Response data:", response.data);
      setMessage('Password recovery email sent successfully.');
    } catch (error) {
      console.error("Error occurred:", error);
      setMessage('Failed to send password recovery email.');
    }
  };

  return (
    <div className={styles['forget-password-window']}>
      <div className={styles.icon}>
        <img src={logo} alt="Icon" />
      </div>
      <span className={styles['close-icon']} onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </span>
      <div>
        <h2>بازیابی رمز عبور</h2>
      </div>
      <div>
        <p>برای بازیابی رمز عبور خود، ایمیل خود را وارد نمایید</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <button type="submit">بازیابی رمز عبور</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ForgetPasswordWindow;
