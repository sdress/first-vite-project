import React from "react";

const Header = (props) => {
    return (
        <div id="navbar">
            <div id="name">
                <h1 className='company'>Johannesen & Sons Greenscaping</h1>
                <h5>Save the planet (and your waterbill) with Johannesen Greenscaping</h5>
            </div>
            <div id="navbar-right">
                <a href="#carouselExample">See Projects</a>
                <a href="#contact">Contact Us</a>
            </div>
        </div>
    );
}

export default Header;