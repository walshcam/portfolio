//==================================================================================
// Imported Packages For The Main Page
//==================================================================================
import React from 'react';
// Import UI Elements
import Navbar from './../components/Navbar/Navbar';
import Footer from "./../components/Footer/Footer";

const PageWrapper = ({children}) => (
    <div className = "background-white">
        <Navbar />
        <div className = "container" style = {{ minHeight: "70.9vh" }}>
            {children}
        </div>
        <Footer
            colclass = {"col-12 col-md-6"}
        />
    </div>
);

export default PageWrapper;
