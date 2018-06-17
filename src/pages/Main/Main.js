//==================================================================================
// Imported Packages For The Main Page
//==================================================================================
import React, { Component } from 'react';
import anime from 'animejs';
import { TransitionGroup, Transition } from 'react-transition-group'

const data = [{
    id: 1,
    datax: 160,
    className: "small square el"
},{
    id: 2,
    datax: 80,
    className: "small square el"
},{
    id: 3,
    datax: 250,
    className: "small square el"
}]

class Main extends Component {

//==================================================================================
// AnimeJS Functions
//==================================================================================

    animeRef = (project) => anime({
        targets: project,
        translateX: (project) => {
            el.getAttribute(project.datax);
        },
        translateY: (el, i) => {
            50 + (-50 * i);
        },
        scale: (el, i, l) => {
            (l - i) + .25
        },
        rotate: () => {anime.random(-360, 360);},
        duration: () => {anime.random(1200,1800);},
        duration: () => {anime.random(800, 1600);},
        direction: 'alternate'
    });


    state = {

    }

//==================================================================================
// Render The Page
//==================================================================================
    render() {
        return(
            <div>
                Navbar With My Name?
                <TransitionGroup>
                    {data.map( project =>
                        <Transition
                            key = { project.id }
                        >
                            
                        </Transition>
                    )}
                </TransitionGroup>
            </div>
        );
    }

}

export default Main;