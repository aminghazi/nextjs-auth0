import React, { Component } from "react";
import axios from "axios";

import MainLayout from "../components/layouts/mainLayout";

class Home extends Component {
    static async getInitialProps({pathname,query,asPath,req,res}) {

        // setTimeout(function () {
        //     console.log('timeout')
        // }, 1000);

        let userData;

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
            userData = response.data;
        } catch {
            console.log('error')
        }

        // console.log(pathname) -> root in page ex: / or /about
        // console.log(query) -> show query string ex: /?hello=name => { hello: name }
        // console.log(asPath) -> show query string ex: /?hello=name => /?hell0=name
        // console.log(req) -> property

        return {
            user:{
                firstname:'amin',
                lastname:'ghazi'
            },
            userData
        }
    }

    constructor(props) {
        super(props)

        this.state = {
            user: this.props.user,
            userData: this.props.userData
        }
    }

    render() {
        console.log(this.state);
        return (
            <>
                <MainLayout>
                    <h1>Hello Auth Next</h1>
                </MainLayout>
            </>
        )
    }
}

export default Home;