import React from 'react';
import './Footer.css';

class Footer extends React.Component {

    render() {
        return (
            <div id="contact">
                <div className="footer-divider">
                    <div className="footer-divider-left"></div>
                    <div className="footer-divider-right"></div>
                </div>
                <div className="contact-sub">
                    <h3>Contact</h3>
                    <div className="contact-links">
                        <a target="_blank" rel="noreferrer" href="mailto: michaelj.sliger@gmail.com">Email</a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/michaeljsliger/">GitHub</a>
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/michael-sliger/">LinkedIn</a>
                    </div>
                    <div className="back-to-top">
                        <a href="#home">Back to Top</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;