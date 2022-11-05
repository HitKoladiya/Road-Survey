import Head from "next/head";
import React from "react";
import FormNqm from "./components/FormNqm";
import Navbar from "./components/Navbar";
import { useUser } from "@auth0/nextjs-auth0";

const Details = () => {
    const { user, error, isLoading } = useUser();
    console.log(user);

    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>{error.message}</div>;
    // if (!user) return <div>Not logged in</div>;

    return (
        <>
            <Head>
                <title>Fill Details</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar current="DetailsNqm" />
            {user ? <FormNqm /> : <div>Not logged in</div>}
        </>
    );
};

export default Details;
