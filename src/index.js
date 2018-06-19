//==================================================================================
// Imported Packages For The App Routing
//==================================================================================
import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

// CSS
import './index.css';

// Pages
import Main from './pages/Main/Main';
import AboutMe from './pages/AboutMe/AboutMe'


//==================================================================================
// Render Webpage Routes
//==================================================================================
ReactDOM.render(
<Router>
    <Switch>
        <Route exact path = "/" component = {Main} />
        <Route path = "/AboutMe" component = {AboutMe} />
    </Switch>
</Router>,
document.getElementById('root'));