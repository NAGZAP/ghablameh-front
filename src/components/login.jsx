import React ,{ useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import styles from "../SignUp/SignUp.module.css";
import { Link, useNavigate, redirect } from "react-router-dom";
import AuthManager from "../APIs/AuthManager";
import  ForgetPasswordWindow from "./ForgetPasswordWindow"

/* SignUpTailwind.module.css */
/* import styles from './SignUp.module.css' */


const validationSchema = Yup.object({
  username: Yup.string(),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      "رمز کوتاه تر از ۸ حرف نمی تواند باشد!"
    )
    .required(),
});

function Login() {
  const navigate=useNavigate()
  const [isForgetPasswordOpen, setIsForgetPasswordOpen] = useState(false);
  const openForgetPasswordWindow = () => {
    setIsForgetPasswordOpen(true);
  };

  const closeForgetPasswordWindow = () => {
    setIsForgetPasswordOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    let responsedata = await AuthManager.LoginRequest(data.username , data.password);
    localStorage.setItem("token" , responsedata.data.tokens.access);
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <div className={styles.signup}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <p className="max font-semibold text-template-custom-blue text-4xl dark:text-template-custom-blue text-center mt-5">
            ورود
          </p>
          <div className="w-72 mt-1 mb-1 mr-20 ml-20">
            <div className="relative w-full min-w-[200px] h-10">
              <input
                className="peer w-full h-full bg-transparent text-template-custom-blue                      
            font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                placeholder=" "
                {...register("username")}
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
                نام کاربری
              </label>
              {errors.username && (
                <label className={styles.Errors}>
                  {" "}
                  {"*" + errors.username.message}
                </label>
              )}
            </div>
          </div>
          <br />
          <div className="w-72 mt-1 mb-1 mr-20 ml-20">
            <div className="relative w-full min-w-[200px] h-10">
              <input
                className="focus:ring-0 peer w-full h-full bg-transparent text-template-custom-blue                      
              font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-template-custom-orange disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-template-custom-blue placeholder-shown:border-t-template-custom-blue border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[6px] border-template-custom-orange focus:border-template-custom-orange bg-gray-100"
                placeholder=" "
                type="password"
                {...register("password")}
              />
              <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-3.5 before:h-1.5 before:mt-[6px] before:mr-[0px] peer-placeholder-shown:before:border-transparent before:rounded-tr-md before:border-t peer-focus:before:border-t-4 before:border-r peer-focus:before:border-r-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-2 after:mt-[6px] after:ml-[0px] peer-placeholder-shown:after:border-transparent after:rounded-tl-md after:border-t peer-focus:after:border-t-4 after:border-l peer-focus:after:border-l-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-template-custom-gray peer-focus:text-template-custom-orange before:border-template-custom-orange peer-focus:before:!border-template-custom-orange after:border-template-custom-orange peer-focus:after:!border-template-custom-orange">
                رمز عبور
              </label>
              {errors.password && (
                <label className={styles.Errors}>
                  {" "}
                  {"*" + errors.password.message}
                </label>
              )}
            </div>
          </div>
          <br />
          <p>
            <div className="w-72 mb-1 mr-20 ml-20">
              <input
                className={
                  styles.button_sign +
                  " " +
                  "peer w-full h-[40px] bg-template-custom-blue text-white outline-none focus:outline-none disabled:bg-template-custom-orange disabled:border-0 transition-all rounded-full cursor-pointer"
                }
                type="submit"
                value="ورود"
              />
            </div>
          </p>
          <p>
            <a className={styles.link_to_signin} href="#">
              اکانت ندارید؟ ثبت نام کنید ...
            </a>
        <br/>
        <button onClick={openForgetPasswordWindow}>
             
              <p  className={styles.link_to_signin} >آیا رمز عبور خود را فراموش کردید ؟</p>
            </button>
            {isForgetPasswordOpen && (
              <ForgetPasswordWindow onClose={closeForgetPasswordWindow} />
            )}
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
