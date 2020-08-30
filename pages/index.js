import React, { Component } from "react";
import axios from "axios";

import MainLayout from "../components/layouts/mainLayout";
import Link from "next/link";

class Home extends Component {
    static async getInitialProps({pathname,query,asPath,req,res}) {

        // console.log(pathname) -> root in page ex: / or /about
        // console.log(query) -> show query string ex: /?hello=name => { hello: name }
        // console.log(asPath) -> show query string ex: /?hello=name => /?hell0=name
        // console.log(req) -> property

        // setTimeout(function () {
        //     console.log('timeout')
        // }, 1000);

        let userData;

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            userData = response.data;
        } catch {
            console.log('error')
        }

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

        // this.state = {
        //     user: this.props.user,
        //     userData: this.props.userData
        // }
    }

    renderUserList = (users) => (
            users.map( (user, i) => (
                <li key={i}>
                    <Link
                        as={`users/profile/${user.id}`}
                        href={{
                            pathname:'users/profile',
                            query:{
                                userId: user.id
                            }
                        }}
                    >
                        <a> { user.name } </a>
                    </Link>
                </li>
            ))
    )

    render() {
        // console.log(this.props)
        return (
            <>
                <MainLayout>
                    <h1>Pick a user</h1>
                    <ul>
                        { this.renderUserList(this.props.userData) }
                    </ul>
                </MainLayout>
            </>
        )
    }
}

export default Home;