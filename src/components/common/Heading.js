import React from 'react'
import UnderLine from '../common/UnderLine'
import "../../css/heading.css";

function Heading(props) {
    return (
        <div className={props.col==="light"?'heading light':'heading'}>
            <h2>{props.head}</h2>
            <UnderLine col={props.col==="light" && 'light'} /> 
        </div>
    )
}

export default Heading
