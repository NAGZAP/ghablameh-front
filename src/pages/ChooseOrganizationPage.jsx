import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { Grid } from "@mui/material";
//import { Sidebar } from "flowbite-react";
const ChooseOrganizationPage = () => {

    return (
        <>
        <Navbar/>
        <Grid container>
            <Grid item>
                <Sidebar/>
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