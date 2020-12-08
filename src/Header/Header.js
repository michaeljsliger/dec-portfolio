import React from 'react';
import './Header.css';

class Header extends React.Component {

    render() {
        return (
            <div className="header-box" id="home">
                <div>
                    <h1>Michael Sliger Portfolio</h1>
                </div>
                <div className="header-links">
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        )

    }
}

export default Header;