import Head from "next/head";
import React from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

const Details = () => {
    return (
        <>
            <Head>
                <title>Fill Details</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar current="Details" />
            <Form />
        </>
    );
};

export default Details;
