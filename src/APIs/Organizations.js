import axios from "axios";
import getToken from './AuthManager';

const GetMyOrganizations = () => {
    const baseUrl = "https://ghablameh.fiust.ir/api/v1/";
    let data = null;
    let token = getToken();
    axios.get(baseUrl + "clients/join-requests/",{headers: {Authorization : "JWT " + token}}).then(resp => data = resp.data);
    if(data == null) 
    {
        data = [ {id:0 , name:"سازمانی یافت نشد!"}]
    }
    return data;
};

export default GetMyOrganizations;