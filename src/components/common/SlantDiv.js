import React from 'react'
import '../../css/slant-div.css'

function SlantDiv(props) {
    return (
        <>
            <div className='slant-divider before'></div>
            <div className='slant-div'></div>
            <div className='slant-divider after'></div>
        </>
    )
}

export default SlantDiv
