import React from 'react';
import PROFPIC from '../assets/profile/foggymountainbackflip.jpg';
import './Profile.css';
import Dropdown from '../Dropdown/Dropdown'

class Profile extends React.Component {

    render() {
        return (
            <div className="profile-gradient" id="about">
                <div className="profile-content">
                    <div className="profile-picture">
                        <img src={PROFPIC} alt="foggy backflip" />
                    </div>
                    <Dropdown />
                </div>
            </div>
        )
    }
}

export default Profile;