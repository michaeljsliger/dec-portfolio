import React from 'react';
import './Arrow.css';

function BeckoningArrow(props) {

    return (
        <div id="fixeddiv" className="tooltip">
            <div className="tooltiptext">Scroll down!</div>
            <i className="down big-arrow"></i>
        </div>
    )
}

export default BeckoningArrow;