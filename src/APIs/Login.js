import axios from "axios";

const LoginRequest = async (username , password) => {
    const baseurl = "https://ghablameh.fiust.ir/api";
    let data = null;
    axios.post(baseurl+"/auth/login/" , {username :username , password : password}).then(resp => data = resp.data);
    return data;
}

export default LoginRequest;