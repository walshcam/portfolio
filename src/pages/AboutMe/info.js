//==================================================================================
// Bio Information For The About Me Page
//==================================================================================
import React, { Fragment } from 'react';
import InfoContainer from './../../components/InfoContainer/InfoContainer'

const Info = () => (
    <Fragment>

        {/* Spacer For Top */}
        <div className = "h3"><br/></div>

        {/* Abstract */}
        <InfoContainer
            header = {"Coding Experience"}
        >
            <p>I recently completed UCF's coding bootcamp with a grade average of A. Sample of my work can be found on the main page.</p>
        </InfoContainer>

        {/* More About Me */}
        <InfoContainer
            header = {"More About Me"}
        >
        <p>I was born and raised in Plymouth, MA. From there I left to attend Michigan State University. After graduating with a chemical engineering degree in 2012, I moved to Lafayette, LA to work for Baker Hughes, A GE Company.</p>
        <p>After almost 6 years of service in their Pressure Pumping department as a Field Engineer, I left the company to move to Florida. This move was made to better take care of my family. My wife and I adopted my wife's little sister and we wanted her to go through high school in a location that contained immediate family.</p>
        <p>When I'm not coding, I enjoy exploring Florida and playing fetch with my 4 dogs. None of them have yet to give me the stick back. One eats them.</p>
        </InfoContainer>
    </Fragment>
);

export default Info;