import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import styles from './OrgPage.module.css' 
import { Link, redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/footer';
import Navbar from '../components/Navbar.jsx';
import CustomSidebar from '../components/Sidebar'
function OrgPage(){
        return(
            <div className={styles.containment_boof}>
            <Navbar />
            <div className={styles.itemscenter}>
            <CustomSidebar></CustomSidebar>
            </div>
            <Footer />
          </div>
        )
}
export default OrgPage;