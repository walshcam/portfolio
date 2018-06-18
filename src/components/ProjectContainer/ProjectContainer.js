//==================================================================================
// Component that holds project information in the main page
//==================================================================================
import React from 'react';
import './ProjectContainer.css'

// const cardBodyStyle = {
//     width: '90%',
//     height: '0px',
//     paddingTop: '37.5%',
//     paddingBottom: '37.5%',
//     margin: "5%"
// }

const cardStyle = {
    marginBottom: '2%'
}

const ProjectContainer = (props) => (

    <div className = {props.colclass}>
        <div style = {cardStyle}>
            <a href = {props.project.link}>
                <div className = {`card-body rounded projectContainerCardBodyCSS ${props.cardclass}`} style = {{backgroundImage: `url(${props.project.image})`}}>
                    <div className = {"glass text-purple"}>
                        <div className = {"afterglass"}><strong>
                            {props.project.title}
                        </strong></div>
                    </div>
                </div>
            </a>
        </div>
    </div>
)

export default ProjectContainer;