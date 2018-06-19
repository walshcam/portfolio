//==================================================================================
// Button Used To Access The Repositories From The Main Page
//==================================================================================
import React from 'react';
import Radium from 'radium';

const buttonStyle = {
    display: "block",
    margin: "auto",
    width: '95%',
    borderRadius: '40px',
    ":hover": {
        backgroundColor: "#4B4E58"
    },
    ":active": {
        width: '94%'
    }
    
}

const GithubButton = (props) => (
    <a className = "btn background-purple text-white mb-1" style = {buttonStyle} href = {props.github}>
        <i className="fab fa-github-square text-white h3 mr-1"></i> {props.title} Repo
    </a>
)

export default Radium(GithubButton);