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
    const data = await axios.get(baseurl+"/organizations" , {headers: {Authorization : "JWT "+token}});
    if(data == null || data.length == 0) 
        data = [{id:0 , name:"سازمانی یافت نشد!"}];
    return data;
}
export default {isLoggedIn , LoginRequest , GetOrganizations};