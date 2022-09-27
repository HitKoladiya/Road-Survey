import Head from "next/head";
import React from "react";
import FormSqm from "./components/FormSqm";
import Navbar from "./components/Navbar";

const Details = () => {
    return (
        <>
            <Head>
                <title>Fill Details</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar current="DetailsSqm" />
            <FormSqm />
        </>
    );
};

export default Details;
