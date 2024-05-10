import axios from "axios";
import requests from './AuthManager';

const GetMyOrganizations = () => {
    const baseUrl = "https://ghablameh.fiust.ir/api/v1/";
    let data = null;
    let token = requests.getToken();
    axios.get(baseUrl + "clients/join-requests/",{headers: {'Authorization' : `JWT ${token}`}}).then(resp => data = resp.data);
    if(data == null) 
        data = [ {id:0}]
    return data;
};

const JoinOrganization = (OrganizationId) => {
    const baseUrl = "https://ghablameh.fiust.ir/api/v1/";
    const token = requests.getToken(); // { headers: { Authorization: "jwt " + token }
    let status;
    axios.post(baseUrl + "clients/join-requests/",{organization:OrganizationId},{headers:{Authorization: `JWT ${token}`}}).then(resp => status = resp.status);
    if(status === 200 || status === 201)
        return true;
    else 
        return false;
}

export default {GetMyOrganizations , JoinOrganization};