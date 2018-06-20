//==================================================================================
// Imported Packages For The Main Page
//==================================================================================
import React, { Component } from 'react';
// Import UI Elements
import ProjectContainer from './../../components/ProjectContainer/ProjectContainer';
import PageWrapper from './../PageWrapper';
// Import Project Data
import data from "./projects"
//Import Global Colors
import '../../assets/css/color.css';

class Main extends Component {

    state = {
        enter: true
    }

//==================================================================================
// Render The Page
//==================================================================================
    render() {
        return(
            <PageWrapper>
                <div className = "row">
                    {data.map( project => (
                        <ProjectContainer
                            project = { project }
                            colclass = {"col-12 col-md-6 col-lg-4"}
                            cardclass = {"el background-slate text-white"}
                        />
                    ))}
                </div>
            </PageWrapper>
        );
    }

}

export default Main;