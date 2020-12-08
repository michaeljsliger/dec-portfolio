import React from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {
    state = {
        'first': false,
        'second': false,
        'third': false,
    }

    displayModal = (str) => {
        let updatedState = { ...this.state }
        updatedState[str] = !updatedState[str];
        this.setState({ ...updatedState });
    }

    render() {
        return (
            <div className="modal-container">
                <div className="modal-individual">
                    <div className="modal-header" onClick={() => this.displayModal('first')}>
                        <div className="modal-header-left">
                            Intro
                        </div>
                        <div className="modal-header-right">
                            <i class={`arrow ${this.state['first'] ? 'up' : 'down'}`}></i>
                        </div>
                    </div>
                    {this.state['first'] ? (
                        <div className="modal-content">
                            <p>
                                My name is Michael. I am a Full-Stack Software Engineer located in Boulder, Colorado.
                            </p>
                            <br />
                            <p>
                                I believe that life is to be lived virtuously.
                            </p>
                        </div>
                    ) : ''}
                </div>
                <div className="modal-individual">
                    <div className="modal-header" onClick={() => this.displayModal('second')}>
                        <div className="modal-header-left">
                            About Me
                        </div>
                        <div className="modal-header-right">
                            <i class={`arrow ${this.state['second'] ? 'up' : 'down'}`}></i>
                        </div>
                    </div>
                    {this.state['second'] ? (
                        <div className="modal-content">
                            <p>
                                I am really interested in the problem-solving aspects of coding.
                            </p>
                            <br />
                            <p>
                                To take a complex, chaotic idea and gradually create order is immensely rewarding.
                            </p>
                            <br />
                            <p>
                                I believe that coding is the truest expression of the rational part of our being, yet there is an art to writing good code.
                            </p>
                            <p>
                                In this way, I strive to be an artist.
                            </p>
                        </div>
                    ) : ''}
                </div>
                <div className="modal-individual">
                    <div className="modal-header" onClick={() => this.displayModal('third')}>
                        <div className="modal-header-left">
                            Outside of Programming
                        </div>
                        <div className="modal-header-right">
                            <i class={`arrow ${this.state['third'] ? 'up' : 'down'}`}></i>
                        </div>
                    </div>
                    {this.state['third'] ? (
                        <div className="modal-content">
                            <p>
                                Beyond the computer, I am a professional parkour athlete.
                            </p>
                            <br />
                            <p>
                                I have competed in multiple international competitions, and have appeared on NBC Sports in World Chase Tag
                                as a part of team APEX.
                            </p>
                            <br />
                            <p>
                                I have been training for 9 years, and look forward to many more.
                            </p>
                        </div>
                    ) : ''}
                </div>
            </div>
        )
    }
}

export default Dropdown;