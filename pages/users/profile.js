import React from "react";
import MainLayout from "../../components/layouts/mainLayout";
import axios from "axios";

class Profile extends React.Component {
    static async getInitialProps({query}) {
        let user;

        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${query.userId}`);
            user = response.data;
        } catch (error) {
            console.log(error);
        }

        return { user }
    }

    showUser = (user) => (
        <div className="userDetail">
            <div>Name : { user.name }</div>
            <div>Phone : { user.phone }</div>
            <div>Email : { user.email }</div>
            <style jsx>
                {`
                        .userDetail {
                            padding: 20px 0;
                            line-height: 32px;
                        }
                    `}
            </style>
        </div>
    )

    render() {
        console.log(this.props)
        return (
            <>
                <MainLayout>
                    <h1>User profile</h1>
                    { this.showUser(this.props.user) }
                </MainLayout>
            </>
        )
    }
}

export default Profile;