import React, { Component } from 'react';
import MainLayout from "../components/layouts/mainLayout";
import Message from "../components/includes/message";
import Router from "next/router";

class About extends Component {

    handleRouterStart = url => {
        console.log('App is changing to : ', url);
    }

    handleRouterChangeComplete = url => {
        console.log('App changed : ', url);
    }

    handleBeforeHistoryChange = url => {
        console.log('App is changed to : ', url);
    }

    componentDidMount() {
        // console.log(Router.push)
        // console.log(Router.query)

        // Router.beforePopState(({url, as, options}) => {
        //     if (as === '/contact') {
                // window.location.href = "/whatever"; // redirect page to back
                // window.location.href = as; // refresh page to back
        //         return false
        //     }
        //
        //     return true
        // })

        // Router.replace('/contact'); // redirect page to contact
        // Router.replace('/contact', '/contact/123'); // redirect page to contact

        Router.events.on('routeChangeStart', this.handleRouterStart);
        Router.events.on('routeChangeComplete', this.handleRouterChangeComplete);
        Router.events.on('beforeHistoryChange', this.handleBeforeHistoryChange);


    }

    render() {
        return (
            <>
                <MainLayout>
                    <h1>About Page</h1>
                    <Message/>
                    <div>
                        <span onClick={()=> Router.push('/users/profile/1')}>
                            Click Me now!!
                        </span>
                    </div>
                </MainLayout>
            </>
        )
    }
}

export default About;