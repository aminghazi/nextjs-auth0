import React from "react";
import Header from "../includes/header";
import Head from "next/head";

const MainLayout = (props) => (
    <>
        <Head>
            <title>Next Js - Auth</title>
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="#"/>
        </Head>
        <div className="container">
            <Header/>
            {props.children}
        </div>
        <style jsx>
            {`
                .mainLayout {
                    
                }
                .container {
                    margin: 0 auto;
                    max-width: 1040px;
                    font-family: 'Roboto', sans-serif;
                 }
            `}
        </style>
    </>
)
export default MainLayout;