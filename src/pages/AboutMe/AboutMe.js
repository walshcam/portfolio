//==================================================================================
// Imported Packages For The Main Page
//==================================================================================
import React, { Component } from 'react';

// UI Elements
import PageWrapper from './../PageWrapper';

// Info Data
import Info from './info';

class AboutMe extends Component {

    render() {
        return(
            <PageWrapper>
                <Info/>
            </PageWrapper>
        )
    }

}

export default AboutMe;