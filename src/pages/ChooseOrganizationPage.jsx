import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { Grid } from "@mui/material";
import  CustomSidebar from '../components/Sidebar';
const ChooseOrganizationPage = () => {

    return (
        <>
        <Navbar/>
        <Grid container>
            <Grid item>
                <CustomSidebar/>
            </Grid>
            <Grid item>
                <ChooseOrganizationPage/>
            </Grid>
        </Grid>
        <Footer/>
        </>
    );
}

export default ChooseOrganizationPage;