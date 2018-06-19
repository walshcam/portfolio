//==================================================================================
// Imported Packages For The Main Page
//==================================================================================
import React, { Component } from 'react';
import anime from 'animejs';
import { TransitionGroup, Transition } from 'react-transition-group';
// Import UI Elements
import ProjectContainer from './../../components/ProjectContainer/ProjectContainer';
import Navbar from './../../components/Navbar/Navbar';
import Footer from "./../../components/Footer/Footer";
// Import Project Data
import data from "./projects"
//Import Global Colors
import '../../assets/css/color.css';

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
            value: 1.1,
            duration: 2800,
            delay: 900,
            easing: 'easeInOutQuart'
        }
    });

//==================================================================================
// Render The Page
//==================================================================================
    render() {
        return(
            <div className = "background-white">
                <Navbar />
                <div className = "container">
                    <TransitionGroup
                    id = "list"
                    className = "row"
                    >
                        {data.map( project => (
                            <Transition
                                key = { project.id }
                                in = {this.state.enter}
                                onEntering = {this.animeRef}
                                timeout = {0}
                                appear
                                mountOnEnter
                            >
                            {
                                (status) => (
                                    <ProjectContainer
                                        status = { status }
                                        project = { project }
                                        colclass = {"col-12 col-md-6 col-lg-4"}
                                        cardclass = {"el background-slate text-white"}
                                    />
                                )
                            }
                            </Transition>
                        ))}
                    </TransitionGroup>
                </div>
                <Footer
                    colclass = {"col-12 col-md-6 col-lg-4"}
                />
            </div>
        );
    }

}

export default Main;