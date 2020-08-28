import React from "react";
import { withRouter } from "next/router";

const Message = (props) => {

    const handler = () => {
        props.router.push({
            pathname:'/users/profile',
            query: { userId: 1 }
        }, "/users/profile/1")
    }

    return(
        <>
            <div>I'm the "{props.router.pathname}"  page</div>
            <div> click to <b onClick={handler}>here</b>  </div>
        </>
    )
}

export default withRouter(Message);