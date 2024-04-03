import axios from "axios";

const GetOrganizations = () => {
    const baseUrl = "https://ghablameh.fiust.ir/api/";
    let data = null;
    axios.get(baseUrl + "").then(resp => data = resp.data);
    return data;
};

export default GetOrganizations;