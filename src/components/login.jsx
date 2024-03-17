import React from "react";
import style from "../styles/login.module.css";
const Login = () => {
    return (
        <React.Fragment>
            <div className={style.loginbox}>
                <div className={style.loginboxtitle}>
                    ورود
                </div>
                <div className={style.inputsbox}>
                    <input type="email" id="email" placeholder="ایمیل"/>
                    <input type="password" id="password" placeholder="کلمه عبور"/>
                    <button type="submit" >ورود</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;