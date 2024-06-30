import React, { useState } from 'react';
import logo from '../assets/password22.png';
import styles from '../listorg/home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';

const ForgetPasswordWindow = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formErrors, setFormErrors] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setMessage('');
    setFormErrors('');
    const errors = [];
    if (!email) {
      setFormErrors(' ایمیل را وارد کنید.');
      return;
    }
    if (!/^([a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]{2,})$/.test(email)) {
      setFormErrors(' ایمیل را به درستی وارد کنید.');
      return;
    }
    if (errors.length > 0) {
      // alert(errors.join('\n'));
      setFormErrors(errors);
      return;
    }

    console.log("Submitting email:", email);
    const token = 'JWT ' + localStorage.getItem("token");

    try {
      const response = await axios.post('https://ghablameh.fiust.ir/api/v1/verification/forget_password/', { email }, {

      });
      console.log("Response data:", response.data);
      alert(' درخواست با موفقیت ارسال شد. ');
      onClose(); 
    } catch (error) {
      console.error("Error occurred:", error);
      alert(' درخواست با مشکل مواجه شد. لطفا در زمان دیگری مجددا امتحان کنید. ');
    }
  };

  return (
    <div className={`${styles['forget-password-window']} flex flex-col items-center justify-center`}>
      <h2 className='font-bold text-9xl mb-14'>بازیابی رمز عبور</h2>
        
      <div className={`${styles.icon} mt-7 flex flex-col items-center justify-center`}>
        <img src={logo} alt="Icon" />
      </div>
      <span className={styles['close-icon']} onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} />
      </span>
      <div className='mt-6 mb-2 flex flex-col items-center justify-center'>

        
        <h3 className='text-sm font-medium'>  ایمیل خود را وارد نمایید.</h3>

      </div>
      <div>

        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center my-1'>
          <input
            type=""
            placeholder=" ایمیل "
            value={email}
            onChange={handleEmailChange}
            className="w-80 p-2 rounded-xl mb-2"
            style={{ backgroundColor: 'white', border: '1px solid rgb(38, 87, 124' }} 
            required
          />
          <div>{formErrors && <span className='text-red-600 text-sm'>{formErrors}</span>}</div>
           </div>
            <button type="submit" className='w-60 mt-3'>بازیابی رمز عبور</button>
            {message && <h3 className='text-sm font-medium mt-2 text-red-500'>{message}</h3>}
         
        </form>

      </div>
    </div>
  );
};

export default ForgetPasswordWindow;
