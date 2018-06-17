//==================================================================================
// Component that holds project information in the main page
//==================================================================================
import React from 'react';

//Styling For Components
const myStyle = {
    width: '25px',
    height: '25px',
    backgroundColor: 'green'
}

const ProjectContainer = (props) => (
    <div className = {props.className} style = {myStyle} id = {props.id}>
    </div>
)

export default ProjectContainer;