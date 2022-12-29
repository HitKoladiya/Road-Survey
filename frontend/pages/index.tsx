import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "./components/Navbar";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar current="/" />
      <img src="/hm.jpg" alt="logo" />
    </div>
  );
};

export default Home;
