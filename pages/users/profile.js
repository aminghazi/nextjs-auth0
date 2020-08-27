import React from 'react';

const Profile = (props) => {
    console.log(props)
    return (
        <>
            <h1>Profile Page</h1>
        </>
    )
}

Profile.getInitialProps = async ({req}) => {
    return { values: '1,2,3,4' }
}

export default Profile;