import React, { useState } from "react";
import style from "../styles/login.module.css";
import LoginRequest from "../APIs/Login";
const Login = () => {
    const [username , setUsername] = useState();
    const [password , setPassword] = useState();
    const submitLogin = () => {
        let token = LoginRequest(username , password);
        localStorage.setItem("token" , token);
    }
    return (
        <React.Fragment>
            <div className={style.loginbox}>
                <div className={style.loginboxtitle}>
                    ورود
                </div>
                <div className={style.inputsbox}>
                    <input type="text" id="username" placeholder="نام کاربری" onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" id="password" placeholder="کلمه عبور" onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit" onClick={submitLogin}>ورود</button>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Login;