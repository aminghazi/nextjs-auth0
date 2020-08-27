import React, { Component } from 'react';
import MainLayout from "../components/layouts/mainLayout";

class Contact extends Component {
    render() {
        return (
            <>
                <MainLayout>
                    <h1 className="titlePage">Contact Page</h1>
                    <style jsx>
                        {`
                            .titlePage {
                                color: red;
                            }
                        `}
                    </style>
                </MainLayout>
            </>
        )
    }
}

export default Contact;