import axios from "axios";
import { useState } from "react";
const isLoggedIn = () => 
{
    let tkoen = localStorage.getItem("token");
    if(tkoen === null) 
    {
        return false;
    } else {
        return {
            token : token,
            isLoggedin : true
        };
    }
}

const LoginRequest = async (username , password) => {
    const baseurl = "https://ghablameh.fiust.ir/api/v1";
    const body = {username :username , password : password};
    const data = await axios.post(baseurl+"/auth/login/" ,body )
    return data;
}

const GetOrganizations = async () => {
    const baseurl = "https://ghablameh.fiust.ir/api/v1";
    const token = localStorage.getItem("token");
    let data = [];
    data = await axios.get(baseurl+"/organizations" , {headers: {Authorization : "JWT "+token}}).catch(function (error) {
        if (error.response) {
            data = [{id:0 , name:"سازمانی یافت نشد!"}];
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
            data = [{id:0 , name:"سازمانی یافت نشد!"}];
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
            data = [{id:0 , name:"سازمانی یافت نشد!"}];
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
      });
    if(data == null || data.length == 0) 
        data = [{id:0 , name:"سازمانی یافت نشد!"}];
    return data;
}

const setToken = (token) => {
    localStorage.setItem("token" , token);
}

const getToken = () => 
{
    return localStorage.getItem("token");
}
export default {isLoggedIn , LoginRequest , GetOrganizations , setToken , getToken};