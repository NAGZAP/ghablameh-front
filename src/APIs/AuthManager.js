import axios from "axios";
import { useState } from "react";
import organizations from "./Organizations";
const isLoggedIn = () => {
  let tkoen = localStorage.getItem("token");
  if (tkoen === null) {
    return false;
  } else {
    return true;
  }
};
 
const orguser = () =>
  {
      const token = getToken ();
      const baseurl = "https://ghablameh.fiust.ir/api/v1";
      let user = true ;
      let organization = true;
      axios.get(baseurl + "/clients/me" , {headers: {'Authorization':"JWT "+token}}).then(response => console.log(response)).catch(error => { if(error.status===401){user=false}});
      axios.get(baseurl + "/organizations/me" , {headers: {'Authorization':"JWT "+token}}).then(response => console.log(response)).catch(error => { if(error.status===401){organization=false}});
      if (user===false && organization===true )
        {
           return 1 ;// 1 is equal to oraganization
        }
        else if (user===true && organization===false)
        {
           return 2 ; // 2 is equal to user
        }
        else
        {
          return 3; 
        }
  }
const LoginRequest = async (username, password) => {
  const baseurl = "https://ghablameh.fiust.ir/api/v1";
  const body = { username: username, password: password };
  const data = await axios.post(baseurl + "/auth/login/", body);
  return data;
};

const GetOrganizations = async () => {
  const baseurl = "https://ghablameh.fiust.ir/api/v1";
  const token = localStorage.getItem("token");
  let data = []; //data =
  await axios
    .get(baseurl + "/organizations", {
      headers: { Authorization: "JWT " + token },
    })
    .then((resp) => (data = resp.data))
    .catch(function (error) {
      if (error.response) {
        if (error.response.status === 401) {
          data.push({ id: 0, name: "ابتدا وارد حساب کاربری خود شوید!" });
        } else {
          data.push({ id: 0, name: "سازمانی یافت نشد!" });
        }
      } else if (error.request) {
        data.push({ id: 0, name: "سازمانی یافت نشد!" });
      } else {
        data.push({ id: 0, name: "سازمانی یافت نشد!" });
      }
    });
  return data;
};

const setToken = (token) => {
  localStorage.setItem("token", token);
};

const getToken = () => {
  return localStorage.getItem("token");
};
export default {
  isLoggedIn,
  LoginRequest,
  GetOrganizations,
  setToken,
  getToken,
  orguser,
};
