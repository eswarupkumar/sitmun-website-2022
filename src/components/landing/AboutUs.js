import React from 'react';
import '../../css/about-us.css';
import { Container } from 'react-bootstrap';
import aboutImg from '../../img/about-img.svg';
import UnderLine from '../common/UnderLine';

function AboutUs() {
    // This is about
    return (
        <Container className="about-us" id='about'>
            <h2>ABOUT THIS EVENT</h2>
            <UnderLine />
            <div className="about-us-div">
                <img src={aboutImg} alt='about-event' />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat.</p>
            </div>
            
        </Container>
    )
}

export default AboutUs;