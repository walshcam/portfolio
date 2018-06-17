//==================================================================================
// Component that holds project information in the main page
// This component contains animations for its mounting and unmounting.
//==================================================================================
import React, { Component } from 'react';
import anime from 'animejs';

//Styling For Components
const myStyle = {
    width: '25px',
    height: '25px',
    backgroundColor: 'green'
}

class ProjectContainer extends Component {

//==================================================================================
// AnimeJS Functions
//==================================================================================

animeRef = (project) => anime({
    targets: project.id,
    translateX: (project) => {
        project.datax;
    },
    translateY: (project, i) => {
        50 + (-50 * i);
    },
    scale: (project, i, l) => {
        (l - i) + .25
    },
    rotate: () => {anime.random(-360, 360);},
    duration: () => {anime.random(1200,1800);},
    duration: () => {anime.random(800, 1600);},
    direction: 'alternate'
});

componentDidMount() {
    console.log(this.props);
    this.animeRef(this.props.project);
}

//==================================================================================
// Render Components
//==================================================================================
    render() {
        return(
            <div style = {myStyle} id = {this.props.id}>
            </div>
        )
    }
}

export default ProjectContainer;