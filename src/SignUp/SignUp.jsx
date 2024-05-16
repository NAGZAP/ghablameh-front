import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './SignUp.module.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Tab, initTWE } from 'tw-elements';
initTWE({ Tab });
/* SignUpTailwind.module.css */
/* import styles from './SignUp.module.css' */
const validationSchema = Yup.object({
  Firstname: Yup.string().required('نام خود را به شکل درست وارد کنید!'),
  Lastname: Yup.string().required('نام خانوادگی خود را به شکل درست وارد کنید!'),
  email: Yup.string().email('فرم نادرست برای ایمیل').required('ایمیل خود را به شکل درست وارد کنید!'),
  phonenumber: Yup.string().matches(/^\d{11}$/, "فرم شماره تلفن باید به شکل درست باشد!").required(),
  password: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'رمز کوتاه تر از ۸ حرف نمی تواند باشد!')
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'رمز ها باید با هم برابر باشند!')
    .required('لطفا رمز خود را تکرار کنید!'),
  Account: Yup.string().required("لطفا اسمی برای اکانت خود قرار دهید!"),
  organizationName: Yup.string().required('نام سازمان را به شکل درست وارد کنید!'),
});

function SignUp() {
  const [activeTab, setActiveTab] = useState('tabs-Persons');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const navigate = useNavigate();
  // const { register, handleSubmit, formState: { errors } } = useForm({
  //   resolver: yupResolver(validationSchema),
  // });
  const [userEmail, setUserEmail] = useState('');
  const [userUsername, setUserUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleUserUsernameChange = (e) => {
    setUserUsername(e.target.value);
  };

  const handleUserPasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleUserFirstNameChange = (e) => {
    setUserFirstName(e.target.value);
  };

  const handleUserLastNameChange = (e) => {
    setUserLastName(e.target.value);
  };

  const handleUserPhoneNumberChange = (e) => {
    setUserPhoneNumber(e.target.value);
  };
  
  const SubmitForm = async (e) => {
    e.preventDefault()
    try {
      
      const formattedPhoneNumber = '+98' + userPhoneNumber.slice(1);
      
      const formattedData = {
        username: userUsername,
        first_name: userFirstName,
        last_name: userLastName,
        email: userEmail,
        phone_number: formattedPhoneNumber,
        password: userPassword,
        gender: "M",
        birthdate: "2024-04-04"
      };
      console.log(formattedData)
/*       const response = await axios.post('https://ghablameh.fiust.ir/api/v1/clients/register/', formattedData);
      const accessToken = response.data.tokens.access;
      localStorage.setItem('token', accessToken); */
      navigate("/EmailVerify");
    } catch (error) {
      alert("اکانتی با اطلاعاتی مشابه استفاده شده است.")
    }
  };

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [organization_name, setOrganizationName] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

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
  
  const handleSubmitOrg = async (e) => {
    e.preventDefault();
    const userData = {
      organization_name,
      username,
      password,
      email,
      first_name: firstName || undefined,
      last_name: lastName || undefined,
      phone_number: phoneNumber || undefined,
    };

    try {
/*       const response = await axios.post('https://ghablameh.fiust.ir/api/v1/organizations/register/', userData);
      const accessToken = response.data.tokens.access;
      localStorage.setItem('token', accessToken); */
      navigate("/EmailVerify");
    } catch (error) {
      alert("اکانتی با اطلاعاتی مشابه استفاده شده است.")
    }
  };


  return (
    <div className={styles.container}>
      <div className={styles.signup}>
        <p className="max font-semibold text-template-custom-blue text-4xl dark:text-template-custom-blue text-center mt-5">ثبت نام</p>
        <ul className="flex list-none flex-row flex-wrap border-b-0 ps-0" role="tablist">
          <li role="presentation" className="flex-grow basis-0 text-center">
            <a
              href="#tabs-Persons"
              className={`inline-block rounded-lg transform lg:scale-90 md:scale-90 scale-75 bg-template-custom-blue mb-0 mt-5 w-40  border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-template-custom-white hover:isolate hover:border-transparent hover:bg-template-custom-orange focus:isolate focus:border-transparent ${activeTab === 'tabs-Persons' ? 'border-primary text-primary dark:text-white/50' : ''
                }`}
              data-twe-toggle="pill"
              data-twe-target="#tabs-Persons"
              role="tab"
              aria-controls="tabs-Persons"
              aria-selected={activeTab === 'tabs-Persons'}
              onClick={() => handleTabClick('tabs-Persons')}
            >
              ثبت نام عادی
            </a>
          </li>
          <li role="presentation" className="flex-grow basis-0 text-center">
            <a
              href="#tabs-Organization"
              className={`rounded-lg transform lg:scale-90 md:scale-90 scale-75 inline-block bg-template-custom-blue br mb-0 mt-5 w-40  border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-template-custom-white hover:isolate hover:border-transparent hover:bg-template-custom-orange focus:isolate focus:border-transparent ${activeTab === 'tabs-Organization' ? 'border-primary text-primary dark:text-white/50' : ''
                }`}
              data-twe-toggle="pill"
              data-twe-target="#tabs-Organization"
              role="tab"
              aria-controls="tabs-Organization"
              aria-selected={activeTab === 'tabs-Organization'}
              onClick={() => handleTabClick('tabs-Organization')}
            >
              ثبت نام ارگان
            </a>
          </li>
        </ul>

        <div className="">
          {activeTab === 'tabs-Persons' && (
            <div className="opacity-100 transition-opacity duration-150 ease-linear" id="tabs-Persons" role="tabpanel" aria-labelledby="tabs-home-tab02">
              <form onSubmit={SubmitForm}>
                {/* FName */}
                <div className="w-72 mt-5 mb-1 mr-20 ml-20">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-template-custom-blue                      
              font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                      placeholder=" "
                      onChange={handleUserFirstNameChange}
                      required
                    />
                    <label
                      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">نام
                    </label>
                    {/* {errors.Firstname && <label className={styles.Errors}> {"*" + errors.Firstname.message}</label>} */}
                  </div>
                </div>
                {/* ========================================================= */}
                <br />
                {/* LName */}
                <div className="w-72 mb-1 mr-20 ml-20">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-template-custom-blue                      
            font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                      placeholder=" "
                      onChange={handleUserLastNameChange}
                      required
                    />
                    <label
                      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
                      نام خانوادگی
                    </label>
                    {/* {errors.Lastname && <label className={styles.Errors}> {"*" + errors.Lastname.message}</label>} */}
                  </div>
                </div>
                <br />
                {/* Account */}
                <div className="w-72 mt-1 mb-1 mr-20 ml-20">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-template-custom-blue                      
            font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                      placeholder=" "
                      onChange={handleUserUsernameChange}
                    />
                    <label
                      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
                      نام اکانت
                    </label>
                    {/* {errors.Account && <label className={styles.Errors}> {"*" + errors.Account.message}</label>} */}
                  </div>
                </div>
                <br />
                {/* email */}
                <div className="w-72 mt-1 mb-1 mr-20 ml-20">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-template-custom-blue                      
            font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                      placeholder=" "
                      onChange={handleUserEmailChange}
                      required
                    />
                    <label
                      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
                      ایمیل
                    </label>
                    {/* {errors.email && <label className={styles.Errors}> {"*" + errors.email.message}</label>} */}
                  </div>
                </div>
                <br />
                {/* phone number */}
                <div className="w-72 mt-1 mb-1 mr-20 ml-20">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-template-custom-blue                      
              font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                      placeholder=" "
                      required
                      
                      onChange={handleUserPhoneNumberChange}
                    />
                    <label
                      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
                      شماره تلفن
                    </label>
                    {/* {errors.phonenumber && <label className={styles.Errors}> {"*" + errors.phonenumber.message}</label>} */}
                  </div>
                </div>
                <br />
                {/* password */}
                <div className="w-72 mt-1 mb-1 mr-20 ml-20">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="focus:ring-0 peer w-full h-full bg-transparent text-template-custom-blue                      
              font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                      placeholder=" "
                      type='password'
                      required
                      onChange={handleUserPasswordChange}
                    />
                    <label
                      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
                      رمز عبور
                    </label>
                    {/* {errors.password && <label className={styles.Errors}> {"*" + errors.password.message}</label>} */}
                  </div>
                </div>
                <br />
                {/* confirm password */}
                <div className="w-72 mt-1 mb-1 mr-20 ml-20 ">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer focus:ring-0 w-full h-full bg-transparent text-template-custom-blue                      
                  font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                      placeholder=" "
                      type="password"
                      required
                    />
                    <label
                      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
                      تکرار رمز عبور
                    </label>
                    {/* {errors.confirmPassword && <label className={styles.Errors}>{"*" + errors.confirmPassword.message}</label>} */}
                  </div>
                </div>
                <br />
                <br />
                <p>
                  <div className="w-72 mb-1 mr-20 ml-20">
                    <button type='submit' className={styles.button_sign + " " + "peer w-full h-[40px] bg-template-custom-blue text-white outline-none focus:outline-none disabled:bg-template-custom-orange disabled:border-0 transition-all rounded-full cursor-pointer"}>ثبت نام</button>
                  </div>
                  {/* <div className="w-72 mb-1 mr-20 ml-20">
                    <input className={styles.button_sign + " " + "peer w-full h-[40px] bg-template-custom-blue text-white outline-none focus:outline-none disabled:bg-template-custom-orange disabled:border-0 transition-all rounded-full cursor-pointer"} type="submit" value="ثبت نام" />
                  </div> */}
                </p>
                <p>
                  <Link to="/login" className={styles.link_to_signin}>
                    قبلا ثبت نام کرده اید؟
                  </Link>
                </p>
              </form>
            </div>
          )}

          {activeTab === 'tabs-Organization' && (
            <div className="opacity-100 transition-opacity duration-150 ease-linear" id="tabs-Persons" role="tabpanel" aria-labelledby="tabs-home-tab02">
              <form onSubmit={handleSubmitOrg}>
                {/* FName */}
                <div className="w-72 mt-5 mb-1 mr-20 ml-20">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-template-custom-blue                      
                font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                      placeholder=" "
                      onChange={handleFirstNameChange}
                      required
                    />
                    <label
                      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">نام
                    </label>
                    {/* {errorsOrg.Firstname && <label className={styles.Errors}> {"*" + errors.Firstname.message}</label>} */}
                  </div>
                </div>
                {/* ========================================================= */}
                <br />

                {/* LName */}
                <div className="w-72 mb-1 mr-20 ml-20">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-template-custom-blue                      
              font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                      placeholder=" "
                      onChange={handleLastNameChange}
                      required
                    />
                    <label
                      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
                      نام خانوادگی
                    </label>
                    
                    {/* {errorsOrg.Lastname && <label className={styles.Errors}> {"*" + errorsOrg.Lastname.message}</label>} */}
                  </div>
                </div>
                <br />
                {/* orgname */}
                <div className="w-72 mb-1 mr-20 ml-20">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-template-custom-blue                      
              font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                      placeholder=" "
                      onChange={handleOrganizationNameChange}
                      required
                    />
                    <label
                      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
                      نام سازمان
                    </label>
                    {/* {errorsOrg.organizationName && <label className={styles.Errors}> {"*" + errorsOrg.organizationName.message}</label>} */}
                  </div>
                </div>
                <br />

                {/* Account */}
                <div className="w-72 mt-1 mb-1 mr-20 ml-20">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-template-custom-blue                      
              font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                      placeholder=" "
                      onChange={handleUsernameChange}
                      required
                    />
                    <label
                      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
                      نام اکانت
                    </label>
                    {/* {errorsOrg.Account && <label className={styles.Errors}> {"*" + errorsOrg.Account.message}</label>} */}
                  </div>
                </div>
                <br />
                <div className="w-72 mt-1 mb-1 mr-20 ml-20">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-template-custom-blue                      
              font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                      placeholder=" "
                      onChange={handleEmailChange}
                      required
                    />
                    <label
                      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
                      ایمیل
                    </label>
                    {/* {errorsOrg.email && <label className={styles.Errors}> {"*" + errorsOrg.email.message}</label>} */}
                  </div>
                </div>
                <br />
                <div className="w-72 mt-1 mb-1 mr-20 ml-20">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer w-full h-full bg-transparent text-template-custom-blue                      
                font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                      placeholder=" "
                      onChange={handlePhoneNumberChange}
                      required
                    />
                    <label
                      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
                      شماره تلفن
                    </label>
                    {/* {errorsOrg.phonenumber && <label className={styles.Errors}> {"*" + errorsOrg.phonenumber.message}</label>} */}
                  </div>
                </div>
                <br />
                <div className="w-72 mt-1 mb-1 mr-20 ml-20">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="focus:ring-0 peer w-full h-full bg-transparent text-template-custom-blue                      
                font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                      placeholder=" "
                      type='password'
                      onChange={handlePasswordChange}
                      required
                    />
                    <label
                      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
                      رمز عبور
                    </label>
                    {/* {errorsOrg.password && <label className={styles.Errors}> {"*" + errorsOrg.password.message}</label>} */}
                  </div>
                </div>
                <br />
                <div className="w-72 mt-1 mb-1 mr-20 ml-20 ">
                  <div className="relative w-full min-w-[200px] h-10">
                    <input
                      className="peer focus:ring-0 w-full h-full bg-transparent text-template-custom-blue                      
                    font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                      placeholder=" "
                      type="password"
                      required
                    />
                    <label
                      className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
                      تکرار رمز عبور
                    </label>
                    {/* {errorsOrg.confirmPassword && <label className={styles.Errors}>{"*" + errorsOrg.confirmPassword.message}</label>} */}
                  </div>
                </div>
                <br />
                <br />
                <p>
                  <div className="w-72 mb-1 mr-20 ml-20">
                    <input className={styles.button_sign + " " + "peer w-full h-[40px] bg-template-custom-blue text-white outline-none focus:outline-none disabled:bg-template-custom-orange disabled:border-0 transition-all rounded-full cursor-pointer"} type="submit" value="ثبت نام" />
                  </div>
                </p>
                <p>
                  <Link to="/login" className={styles.link_to_signin}>
                    قبلا ثبت نام کرده اید؟
                  </Link>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>

  );
}
export default SignUp;