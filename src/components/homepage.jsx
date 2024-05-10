import React from 'react';
import HomeOrgPage from '../HomePageForOrg/HomePage';
import ListOrg from '../listorg/listorg';
import AuthManager from '../APIs/AuthManager';

import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
const Home = () => {
    const flag = AuthManager.orguser();
    return (
        <div>
       {flag === 1 ? <HomeOrgPage/> : <ListOrg/> }
       
       </div>
    );
};
export default Home;
