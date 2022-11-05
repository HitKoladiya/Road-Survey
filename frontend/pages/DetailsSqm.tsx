import Head from "next/head";
import React from "react";
import FormSqm from "./components/FormSqm";
import Navbar from "./components/Navbar";
import { useUser } from "@auth0/nextjs-auth0";

const Details = () => {
    const { user, error, isLoading } = useUser();
    console.log(user);
    return (
        <>
            <Head>
                <title>Fill Details</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar current="DetailsSqm" />

            {user ? <FormSqm /> : <div>Not logged in</div>}
        </>
    );
};

export default Details;
