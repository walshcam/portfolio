//==================================================================================
// Component that holds project information in the main page
// This component contains animations for its mounting and unmounting.
//==================================================================================
import React from 'react';

const cardBodyStyle = {
    width: '90%',
    height: '0px',
    paddingTop: '37.5%',
    paddingBottom: '37.5%',
    margin: "5%"
}

const cardStyle = {
    marginBottom: '2%'
}

const ProjectContainer = (props) => (
    <div className = {props.colclass}>
        <div style = {cardStyle} className = "card">
            <div style = {cardBodyStyle} className = {`card-body rounded ${props.cardclass}`}>
                {props.project.title}
            </div>
        </div>
    </div>
)

export default ProjectContainer;