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
// Import Images
import burgermenu from "../../assets/images/main/burgermenu.JPG";
import clickygame from "../../assets/images/main/clickygame.JPG";
import kidsfirstbank from "../../assets/images/main/kidsfirstbank.JPG";
import opinwater from "../../assets/images/main/opinwater.JPG";
import takeoutscrapper from "../../assets/images/main/takeoutscrapper.JPG";
import travellog from "../../assets/images/main/travellog.JPG";


//Import Global Colors
import '../../assets/css/color.css';

//==================================================================================
// Project Data
//==================================================================================
const data = [{
    id: 1,
    title: "OpinWater",
    image: opinwater,
    link: "https://opinwater.herokuapp.com/",
    github: "https://github.com/walshcam/Opinionated-Waters"
},{
    id: 2,
    title: "Clicky-Game",
    image: clickygame,
    link: "https://clickygame1000.herokuapp.com/",
    github: "https://github.com/walshcam/clicky-game"
},{
    id: 3,
    title: "First Kid Bank",
    image: kidsfirstbank,
    link: "https://kidsfirstbank.herokuapp.com/",
    github: "https://github.com/walshcam/kidsAllowance"
},{
    id: 4,
    title: "Burger Menu",
    image: burgermenu,
    link: "https://fathomless-shore-70165.herokuapp.com/",
    github: "https://github.com/walshcam/burger"
},{
    id: 5,
    title: "Travel-Log",
    image: travellog,
    link: "https://benjaminjvaccaro.github.io/Travel-Log/",
    github: "https://github.com/walshcam/Travel-Log"
},{
    id: 6,
    title: "The Takeout Scraper",
    image: takeoutscrapper,
    link: "https://thetakeoutscraper.herokuapp.com/",
    github: "https://github.com/walshcam/MongoScraper"
},]

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