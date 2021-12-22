import React from 'react'
import '../../css/under-line.css';

function UnderLine(props) {
    return (
        <div>
            <div className="under-line"></div>
            <div className={props.col==='light'?"under-line-middle underline-light":"under-line-middle"}></div>
        </div>
    )
}

export default UnderLine
