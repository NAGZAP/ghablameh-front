import React from 'react';
import HomeOrgPage from '../HomePageForOrg/HomePage';
import ListOrg from '../listorg/listorg';
import AuthManager from '../APIs/AuthManager';
const Home = () => {
    const flag = AuthManager.orguser();
    return (
        <div>
       {flag === 1 ? <HomeOrgPage/> : <ListOrg/> }
       
       </div>
    );
};
export default Home;

