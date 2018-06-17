//==================================================================================
// Imported Packages For The Main Page
//==================================================================================
import React, { Component } from 'react';
import anime from 'animejs';
import { TransitionGroup, Transition } from 'react-transition-group';
// Import UI Elements
import ProjectContainer from './../../components/ProjectContainer/ProjectContainer';

// Test Data
const data = [{
    id: 1,
    datax: 160
},{
    id: 2,
    datax: 80
},{
    id: 3,
    datax: 250
}]

class Main extends Component {

    state = {
        enter: true
    }

//==================================================================================
// AnimeJS Functions
//==================================================================================

    animeRef = () => anime({
        targets: "#list .el",
        scale: {
            value: 1.5,
            duration: 900,
            delay: 900,
            easing: 'easeInOutQuart'
        }
    });

//==================================================================================
// Render The Page
//==================================================================================
    render() {
        return(
            <div>
                Navbar With My Name?
                <TransitionGroup
                id = "list"
                >
                    {data.map( project => (
                        <Transition
                            key = { project.id }
                            in = {this.state.enter}
                            onEntering = {this.animeRef}
                            appear
                            mountOnEnter
                        >
                        {
                            (status) => (
                                <ProjectContainer
                                    status = { status }
                                    project = { project }
                                />
                            )
                        }
                        </Transition>
                    ))}
                </TransitionGroup>
            </div>
        );
    }

}

export default Main;