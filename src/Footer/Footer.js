import React from 'react';
import './Footer.css';

class Footer extends React.Component {

    render() {
        return (
            <div id="contact">
                <div className="contact-sub">
                    <h3>Some contact info:</h3>
                    <div className="contact-links">
                        <a href="mailto: michaelj.sliger@gmail.com">Email</a>
                        <a href="https://github.com/michaeljsliger/">GitHub</a>
                        <a href="https://www.linkedin.com/in/michael-sliger/">LinkedIn</a>
                    </div>
                </div>
                <div>
                    <a href="#home">Back to Top</a>
                </div>
            </div>
        )
    }
}

export default Footer;