//==================================================================================
// Container for the information in the About Me Page
//==================================================================================
import React, { Fragment } from 'react';

const InfoContainer = (props) => (
    <Fragment>
        <div className = "h3 text-teal">{props.header}</div>
        <div className = "container text-purple">
            {props.children}
        </div>
    </Fragment>
)

export default InfoContainer;