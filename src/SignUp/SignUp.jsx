import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './SignUp.module.css' 
import { Link, redirect } from 'react-router-dom';
import { useState } from 'react';
import { Tab, initTWE } from 'tw-elements';
import Register from '../components/org'
initTWE({ Tab });
/* SignUpTailwind.module.css */
/* import styles from './SignUp.module.css' */

const validationSchema = Yup.object({
  Firstname: Yup.string().required('نام خود را به شکل درست وارد کنید!'),
  Lastname: Yup.string().required('نام خانوادگی خود را به شکل درست وارد کنید!'),
  email: Yup.string().email('فرم نادرست برای ایمیل').required('ایمیل خود را به شکل درست وارد کنید!'),
  phonenumber: Yup.string().matches(/^\d{11}$/,"فرم شماره تلفن باید به شکل درست باشد!").required(),
  password: Yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, 'رمز کوتاه تر از ۸ حرف نمی تواند باشد!')
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'رمز ها باید با هم برابر باشند!')
    .required('لطفا رمز خود را تکرار کنید!'),
  Account: Yup.string().required("لطفا اسمی برای اکانت خود قرار دهید!"),
});

function SignUp() {
  const [activeTab, setActiveTab] = useState('tabs-Persons');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    try {
      const formattedPhoneNumber = '+98' + data.phonenumber.slice(1); 
      const formattedData = {
        username: data.Account,
        first_name: data.Firstname,
        last_name: data.Lastname,
        email: data.email,
        phone_number: formattedPhoneNumber, 
        password: data.password,
        gender: "M",
        birthdate: "2024-04-04"
      };
      const response = await axios.post('https://ghablameh.fiust.ir/api/v1/client/register/', formattedData);
      const accessToken = response.data.tokens.access;
      localStorage.setItem('token', accessToken);
      console.log(accessToken);
       console.log('Data sent successfully!');
      return redirect("/")
    } catch (error) {
      console.error('Error sending data:', error);
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
            className={`mb-0 mt-3 w-40 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent ${
              activeTab === 'tabs-Persons' ? 'border-primary text-primary dark:text-white/50' : ''
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
            className={`mb-0 mt-3 w-40 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent ${
              activeTab === 'tabs-Organization' ? 'border-primary text-primary dark:text-white/50' : ''
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
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* FName */}
          <div className="w-72 mt-5 mb-1 mr-20 ml-20">
            <div className="relative w-full min-w-[200px] h-10">
              <input 
              className="peer w-full h-full bg-transparent text-template-custom-blue                      
              font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
              placeholder=" "
              {...register('Firstname')} 
              />
              <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">نام
              </label>
              {errors.Firstname && <label className={styles.Errors}> {"*"+errors.Firstname.message}</label>}
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
            {...register('Lastname')} 
            />
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
              نام خانوادگی
            </label>
            {errors.Lastname && <label className={styles.Errors}> {"*"+errors.Lastname.message}</label>}
          </div>
        </div>
        <br/>
        {/* Account */}
        <div className="w-72 mt-1 mb-1 mr-20 ml-20">
          <div className="relative w-full min-w-[200px] h-10">
            <input 
            className="peer w-full h-full bg-transparent text-template-custom-blue                      
            font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
            placeholder=" " 
            {...register('Account')} 
            />
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
              اکانت
            </label>
            {errors.Account && <label className={styles.Errors}> {"*"+errors.Account.message}</label>}
          </div>
        </div>
        <br />
        <div className="w-72 mt-1 mb-1 mr-20 ml-20">
          <div className="relative w-full min-w-[200px] h-10">
            <input
            className="peer w-full h-full bg-transparent text-template-custom-blue                      
            font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100" 
              placeholder=" "
              {...register('email')}
            />
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
              ایمیل
            </label>
            {errors.email && <label className={styles.Errors}> {"*"+errors.email.message}</label>}
          </div>
        </div>
        <br />
        <div className="w-72 mt-1 mb-1 mr-20 ml-20">
          <div className="relative w-full min-w-[200px] h-10">
            <input
              className="peer w-full h-full bg-transparent text-template-custom-blue                      
              font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"             
              placeholder=" "
              {...register('phonenumber')}
            />
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
              شماره تلفن
            </label>
            {errors.phonenumber && <label className={styles.Errors}> {"*"+errors.phonenumber.message}</label>}
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
              {...register('password')}
            />
            <label
              className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
              رمز عبور
            </label>
            {errors.password && <label className={styles.Errors}> {"*"+errors.password.message}</label>}
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
                  {...register('confirmPassword')}
                />
              <label
                className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
                تکرار رمز عبور
              </label>
              {errors.confirmPassword && <label className={styles.Errors}>{"*"+errors.confirmPassword.message}</label>}
              </div>
            </div>
        <br />
        <br/>
        <p>
        <div className="w-72 mb-1 mr-20 ml-20">
          <input className={styles.button_sign +" "+"peer w-full h-[40px] bg-template-custom-blue text-white outline-none focus:outline-none disabled:bg-template-custom-orange disabled:border-0 transition-all rounded-full cursor-pointer"} type="submit" value="ثبت نام" />
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
        {activeTab === 'tabs-Organization' && (
          <div className="opacity-100 transition-opacity duration-150 ease-linear" id="tabs-Organization" role="tabpanel" aria-labelledby="tabs-profile-tab02">
{/*             <Register/>
 */}          </div>
        )}
      </div>
    </div>
    </div>
  );
}
export default SignUp;