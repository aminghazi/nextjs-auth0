import React from "react";
import Header from "../includes/header";
import Head from "next/head";

const MainLayout = (props) => (
    <>
        <Head>
            <title>Next Js - Auth</title>
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
                }
            `}
        </style>
    </>
)
export default MainLayout;