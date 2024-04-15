import { useState } from 'react';
import styles from '../styles/updateorg.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
const Update = () => {
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [username, setUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [avatar, setAvatar] = useState('');
  const [formErrors, setFormErrors] = useState([]);

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
      alert(errors.join('\n')); // Display error messages in an alert
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
      avatar,
    };
    try {
      const response = await fetch('https://ghablameh.fiust.ir/api/v1/client/me/', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': '4IqnkAsVtRhkrwE8YiGnyiQFkbvCrIJRrFjxMcqXAmLBESd8MCuulfCFSHFSTpIr',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {

        console.log('Form submitted successfully');
      } else {

        const errorData = await response.json();
        console.log('Form submission failed:', errorData);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
    // Perform form submission

  };

  const handleChange = (event) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e) => {
      let img = e.target.result;
      setAvatar(img);
    };
  };

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
            <input type="text" id="name" value={name} onChange={(e) => setUsername(e.target.value)} className={styles.input} required placeholder='نام سازمان'/>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>نام مدیر سازمان</label>
            <div className='flex'>
              <input type="text" id="admin_first_name" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.input} required  placeholder='نام'/>
              <div style={{ marginLeft: '10px' }}></div> {/* Add some space */}
              <input type="text" id="admin_last_name" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.input} required placeholder='نام خانوادگی'/>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="admin_username" className={styles.label}> نام کاربری مدیر سازمان  </label>
            <input type="text" id="admin_username" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.input} required placeholder=' نام کاربری مدیر سازمان  '/>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="admin_email" className={styles.label}> ایمیل مدیر سازمان </label>
            <input type="text" id="admin_email" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.input} required placeholder='  ایمیل مدیر سازمان  '/>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="admin_phone_number" className={styles.label}> شماره تماس مدیر سازمان </label>
            <input type="text" id="admin_phone_number" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.input} required placeholder=' شماره تماس مدیر سازمان '/>
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