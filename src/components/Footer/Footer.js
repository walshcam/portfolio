//==================================================================================
// The Website's Footer
//==================================================================================
import React from 'react';

const Footer = (props) => (
    <footer className = "background-grey text-white">
        <div className = "container">
            <div className = "row">
                <div className = {props.colclass}>
                    <div className = "h3"><strong>Contact Information</strong></div>
                    <p className = "mb-0"><strong>Email: </strong><a className = "text-white" href="mailto:cameronwalsh80@gmail.com">cameronwalsh80@gmail.com</a></p>
                    <p><strong>Location: </strong><a className = "text-white" href = "http://maps.google.com/?q=Hardee County Florida">Lakeland, FL Area</a></p>
                    <a href = "https://linkedin.com/in/cameron-walsh-aa557215"><i className="fab fa-linkedin text-white h3 mr-1"></i></a>
                    <a href = "https://github.com/walshcam"><i className="fab fa-github-square text-white h3 mr-1"></i></a>
                </div>
                <div className = {props.colclass}>
                    <div className = "h3"><strong>Current Page Technology</strong></div>
                    <p className = "h4"><strong>React</strong></p>
                    <p className = "mb-0"><strong>Routing: </strong>React Router</p>
                    <p className = "mb-0"><strong>Animation: </strong>AnimeJS with React-Transition-Group</p>
                    <p className = "mb-0"><strong>CSS: </strong>Bootstrap with Radium</p>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;