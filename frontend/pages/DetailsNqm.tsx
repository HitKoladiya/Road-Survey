import Head from "next/head";
import React from "react";
import FormNqm from "./components/FormNqm";
import Navbar from "./components/Navbar";

const Details = () => {
    return (
        <>
            <Head>
                <title>Fill Details</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar current="DetailsNqm" />
            <FormNqm />
        </>
    );
};

export default Details;
