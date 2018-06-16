//==================================================================================
// Imported Packages For The App Routing
//==================================================================================
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './pages/Main/Main';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

//==================================================================================
// Render Webpage Routes
//==================================================================================
ReactDOM.render(
<Router>
    <Switch>
        <Route exact path = "/" component = {Main} />
    </Switch>
</Router>,
document.getElementById('root'));