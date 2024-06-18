import { useState, useEffect } from 'react';
import styles from '../styles/updateorg.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Navbarparent from './navbarparent';
import Avatar from "react-avatar";

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

  const [image_base64, setImage_base64] = useState('');
  const [image_url, setImage_url] = useState('');
  const [formErrors, setFormErrors] = useState([]);
  
  const failToast = () => {
    toast.info(
        <div className="flex flex-col items-center">
            <div className="text-center mb-4">{ ` اطلاعات را به درستی وارد کنید `}</div>
        </div>,
        {
            position: 'top-center',
            autoClose: 3000,
            closeButton: true,
            hideProgressBar: false,
            progress: undefined,
            icon: false,
        }
    );
};

const passFailToast = () => {
  toast.info(
      <div className="flex flex-col items-center">
          <div className="text-center mb-4">{ `اطلاعات رمز عبور را به درستی وارد کنید ` }</div>
      </div>,
      {
          position: 'top-center',
          autoClose: 3000,
          closeButton: true,
          hideProgressBar: false,
          progress: undefined,
          icon: false,
      }
  );
};

const submmitToast = () => {
  toast.info(
      <div className="flex flex-col items-center">
          <div className="text-center mb-4">{ `اطلاعات ثبت شد` }</div>
          
          <button className="bg-gray-500 text-white p-2 rounded hover:bg-gray-700 transition duration-150 ease-in-out">
  <Link to="/" className="text-white">
    بازگشت به صفحه اصلی
  </Link>
</button>
      </div>,
      {
          position: 'top-center',
          autoClose: 3000,
          closeButton: true,
          hideProgressBar: false,
          progress: undefined,
          icon: false,
      }
  );
};

  const [isModalOpen, setIsModalOpen] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // model
  const [showMyModel, setShowMyModel] = useState(false);

  // fetch user data
  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get('https://ghablameh.fiust.ir/api/v1/organizations/me/', {
          headers: {
            'Authorization': 'JWT ' + localStorage.getItem("token")
          }
        });

        if (response.status === 200) {
          setName(response.data.name || '');
          setAdmin_first_name(response.data.admin_first_name || '');
          setAdmin_last_name(response.data.admin_last_name || '');
          SetAdmin_username(response.data.admin_username || '');
          setAdmin_email(response.data.admin_email || '');
          setAdmin_phone_number(response.data.admin_phone_number || '');
          setImage_url(response.data.image_url || '')

        } else {
          console.log('fetching userData failed:', response.status);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }

    };
    FetchData();
  }, []);

  // useEffect(() => {
  //   const comeOn = () => {
  //     console.log("image_base64: ", image_base64)
  //   };
  //   comeOn();
  // }, []);

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
    // if (!new_password) {
    //   errors.push('رمز عبور جدید را وارد کنید');
    // }
    // if (!old_password) {
    //   errors.push('رمز عبور جدید را وارد کنید');
    // }
    // if (!confirm_new_password) {
    //   errors.push('تأیید رمز عبور جدید را وارد کنید');
    // }
    if (new_password !== confirm_new_password) {
      errors.push('رمز عبور جدید و تأیید رمز عبور مطابقت ندارند');
    }
    if (errors.length > 0) {
      alert(errors.join('\n')); // Display error messages in an alert
      return;
    }

    // Submit the form with all the data
    const formData = {
      image_base64: image_base64 || '',
      name,
      admin_first_name,
      admin_last_name,
      admin_username,
      admin_email,
      admin_phone_number
    };

    // Retrieve token
    const token = 'JWT ' + localStorage.getItem("token");

    //send form data
    try {
      const response = await axios.put('https://ghablameh.fiust.ir/api/v1/organizations/me/', formData,
        { headers: { Authorization: "JWT " + token } }
    );

      if (response.status === 200) {
        console.log('formData submitted successfully');
        console.log('formData: ', formData)
        setIsModalOpen(true);
      } else {
        const errorData = await response.json();
        console.log('formData submission failed:', errorData);
        console.log('formData: ', formData)
      }
    } catch (error) {
      console.error('An error occurred:', error);
      console.log('formData: ', formData)
    }

    // Pass data for password update
    const passData = {
      old_password: old_password,
      new_password: new_password,
      confirmPassword: confirm_new_password
    };

    // send pass data
    try {
      const response = await axios.post('https://ghablameh.fiust.ir/api/v1/organizations/password/', passData,
        { headers: { Authorization: "JWT " + token } }
      );

      if (response.status === 200) {
        // console.log('PassData submission', );
        // console.log("2s: ",response.status);
        submmitToast();
      } else {
        const errorData = await response.json();
        // console.log('PassData submission failed:', errorData);
        // console.log("2f: ",response.status);
        failToast();
      }
    } catch (error) {
      // console.error('An error occurred:', error);
      passFailToast();
    }
  };

  //image
  const handleChange = (event) => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e) => {
      let img = e.target.result;
      setImage_base64(img);
    };
  };

  function myForm() {
    return (
      <div className={styles.container} >
        <div className='flex justify-center items-center'>
          <div className={styles.card}>
            <h2 className={styles.title}>به‌روزرسانی اطلاعات سازمان </h2>
            <form onSubmit={handleFormSubmit} className={`${styles.form}`}>
              {formErrors.length > 0 && (
                <div className={styles.errorContainer}>
                  <ul className={styles.errorList}>
                    {formErrors.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* image */}
              <div className='flex flex-col items-center justify-center'>
                <div className={styles.formGroup}>
                  <div className={styles.avatarimg}>
                    <div className='flex flex-col items-center justify-center'>
                      <label htmlFor="file_input">

                        {image_base64 || image_url?
                          <img
                            src={!image_base64 && image_url.startsWith('/api/')
                              ? `https://ghablameh.fiust.ir/${image_url}`
                              : image_base64}
                            className={styles.avatar}
                            alt="Profile"
                          />
                          :
                          <Avatar
                            name={name}
                            size="130"
                            round={true}
                            maxInitials={1}
                          />
                        }

                      </label>
                      <input id="file_input" type="file" onChange={handleChange} className={styles.fileinput}></input>
                    </div>
                  </div>
                </div>
              </div>

              {/* input fileds */}
              <div>
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
                    <div style={{ marginLeft: '10px' }}></div>
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
              </div>


              {/* password fields */}
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
                    // required
                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEye : faEyeSlash}
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
                    // required
                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEye : faEyeSlash}
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
                    // required
                    />
                    <FontAwesomeIcon
                      icon={showPassword ? faEye : faEyeSlash}
                      className={styles.passwordIcon}
                      onClick={togglePasswordVisibility}
                    />
                  </div>
                </div>
              </div>

              {/* submit button */}
              <button type="submit" className={styles.button}>
                ارسال
              </button>

            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`${styles.bg} flex flex-col`} >
      <Navbarparent />
          {myForm()}
          {isModalOpen&&(
            <div className='flex justify-center items-center bg-white rounded p-2 m-2 z-10' style={{position:'fixed'}}>
              <div>
              hi
              </div>
            </div>
          )}
    </div>
  );
};

export default Update;