//==================================================================================
// Component that holds project information in the main page
// This component contains animations for its mounting and unmounting.
//==================================================================================
import React from 'react';

//Styling For Components
const myStyle = {
    width: '25px',
    height: '25px',
    margin: '20px',
    backgroundColor: 'green'
};

const ProjectContainer = (props) => (
    <div style = {myStyle} className = "el">
        {props.status}
    </div>
)

export default ProjectContainer;