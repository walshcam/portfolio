//==================================================================================
// Component that holds project information in the main page
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
            <a href = {props.project.link}>
                <div style = {cardBodyStyle} className = {`card-body rounded ${props.cardclass}`}>
                    {props.project.title}
                </div>
            </a>
        </div>
    </div>
)

export default ProjectContainer;