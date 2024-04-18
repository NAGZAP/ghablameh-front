import { useState } from 'react';
import styles from '../styles/updateorg.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
const Update = () => {
  const [name, setName] = useState('');
  const [admin_first_name, setAdmin_first_name] = useState('');
  const [admin_last_name, setAdmin_last_name] = useState('');
  const [admin_username, SetAdmin_username] = useState('');
  const [admin_email, setAdmin_email] = useState('');
  const [admin_phone_number, setAdmin_phone_number] = useState('');

  const [old_password, setOld_password] = useState('');
  const [new_password, setNew_password] = useState('');
  const [confirm_new_password, setConfirm_new_password] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [avatar, setAvatar] = useState('');
  const [formErrors, setFormErrors] = useState([]);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };


  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const errors = [];
    if (!name) {
      errors.push('نام سازمان را وارد کنید');
    }
    if (!admin_first_name) {
      errors.push('نام مدیر را وارد کنید');
    }
    if (!admin_last_name) {
      errors.push('نام خانودگی مدیر را وارد کنید');
    }
    if (!admin_username) {
      errors.push('نام کاربری مدیر را وارد کنید');
    }
    if (!admin_email) {
      errors.push(' ایمیل مدیر را وارد کنید');
    }
    if (!admin_phone_number) {
      errors.push('شماره مدیر را وارد کنید');
    }
    if (!new_password) {
      errors.push('رمز عبور جدید را وارد کنید');
    }
    if (!old_password) {
      errors.push('رمز عبور جدید را وارد کنید');
    }
    if (!confirm_new_password) {
      errors.push('تأیید رمز عبور جدید را وارد کنید');
    }
    if (new_password !== confirm_new_password) {
      errors.push('رمز عبور جدید و تأیید رمز عبور مطابقت ندارند');
    }
    if (errors.length > 0) {
      alert(errors.join('\n')); // Display error messages in an alert
      return;
    }

    // Retrieve token
    // const token = localStorage.getItem("token");

    // Submit the form with all the data
    const formData = {
      avatar,
      name,
      admin_first_name,
      admin_last_name,
      admin_username,
      admin_email,
      admin_phone_number
    };

    //3
    try {
      const token = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE2MDM4NzM2LCJpYXQiOjE3MTM0NDY3MzYsImp0aSI6IjJkZWQ1ODc0MjNiNTQ1NmQ5MDY1NjMzOTk4YjRhNWU5IiwidXNlcl9pZCI6MTZ9.jXuXBTYVkUKpBGmWAewzl0zeF9WewM2tQM19gFZpS10";
      
      const response = await axios.put('https://ghablameh.fiust.ir/api/v1/organizations/me/', formData, {
        headers: {
          'Authorization': token
        }
      });
    
      if (response.status === 200) {
        console.log('Form submitted successfully');
      } else {
        const errorData = await response.json();
        console.log('Form submission failed:', errorData);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
    
    // Pass data for password update
    const passData = {
      old_password: old_password,
      newPassword: new_password,
      confirmPassword: confirm_new_password
    };
 
    try {
      const token = "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE2MDM4NzM2LCJpYXQiOjE3MTM0NDY3MzYsImp0aSI6IjJkZWQ1ODc0MjNiNTQ1NmQ5MDY1NjMzOTk4YjRhNWU5IiwidXNlcl9pZCI6MTZ9.jXuXBTYVkUKpBGmWAewzl0zeF9WewM2tQM19gFZpS10";
      
      const response = await axios.post('https://ghablameh.fiust.ir/api/v1/organizations/password/', passData, {
        headers: {
          'Authorization': token
        }
      });
    
      if (response.status === 200) {
        console.log('Form submitted successfully');
      } else {
        const errorData = await response.json();
        console.log('Form submission failed:', errorData);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
    // Close the form after submission
  };

  //image
  const handleChange = (event) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e) => {
      let img = e.target.result;
      setAvatar(img);
    };
  };
  //passwords
  function PasswordFields() {
    return (
      <div>
        <div className={styles.formGroup}>
          <label htmlFor="currentPassword" className={styles.label}>
            رمز عبور فعلی
          </label>
          <div className={styles.passwordInputContainer}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="old_password"
              value={old_password}
              onChange={(e) => setOld_password(e.target.value)}
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
              id="new_password"
              value={new_password}
              onChange={(e) => setNew_password(e.target.value)}
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
              id="confirm_new_password"
              value={confirm_new_password}
              onChange={(e) => setConfirm_new_password(e.target.value)}
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
      </div>
    );
  }

  return (
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
            <label htmlFor="name" className={styles.label}> نام سازمان  </label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className={styles.input} required placeholder='نام سازمان' />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="admin_username" className={styles.label}> نام کاربری مدیر سازمان  </label>
            <input type="text" id="admin_username" value={admin_username} onChange={(e) => SetAdmin_username(e.target.value)} className={styles.input} required placeholder=' نام کاربری مدیر سازمان  ' />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>نام مدیر سازمان</label>
            <div className='flex'>
              <input type="text" id="admin_first_name" value={admin_first_name} onChange={(e) => setAdmin_first_name(e.target.value)} className={styles.input} required placeholder='نام' />
              <div style={{ marginLeft: '10px' }}></div> {/* Add some space */}
              <input type="text" id="admin_last_name" value={admin_last_name} onChange={(e) => setAdmin_last_name(e.target.value)} className={styles.input} required placeholder='نام خانوادگی' />
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="admin_email" className={styles.label}> ایمیل مدیر سازمان </label>
            <input type="text" id="admin_email" value={admin_email} onChange={(e) => setAdmin_email(e.target.value)} className={styles.input} required placeholder='  ایمیل مدیر سازمان  ' />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="admin_phone_number" className={styles.label}> شماره تماس مدیر سازمان </label>
            <input type="text" id="admin_phone_number" value={admin_phone_number} onChange={(e) => setAdmin_phone_number(e.target.value)} className={styles.input} required placeholder=' شماره تماس مدیر سازمان ' />
          </div>

          <PasswordFields />
          <button type="submit" className={styles.button}>
            ارسال
          </button>
        </form>
      </div>
    </div>
  );
};

export default Update;