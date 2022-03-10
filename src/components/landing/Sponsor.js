import React from 'react'
// import SlantDiv from "../common/SlantDiv";
import TinySlider from "tiny-slider-react";
import { Container } from 'react-bootstrap';
import adidas from '../../img/Sponsor/Biggies_Burger.png';
import ameritrade from '../../img/Sponsor/bites.jpeg'; 
import altrusa from '../../img/Sponsor/captivates.png';
import bmw from '../../img/Sponsor/cookncrew.jpg';
import jbl from '../../img/Sponsor/greenhive.png'
import tesla from '../../img/Sponsor/salon.png';
import '../../css/sponsor.css';
  

function Sponsor() {
    const settings = {
        mouseDrag: true,
        responsive: {
            300: {
                items: 2,
            },
            450: {
                items: 3,
            },
            700: {
                items: 4,
            },
            800: {
                items: 5,
            }
        },
        slideBy: 1,
        loop: true,
        speed: 400,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 2000,
        autoplayButtonOutput: false,
        swipeAngle: false
    };
    return (
        <div className="sponsor-section" style={{position: 'relative'}}>
            {/* <SlantDiv alt={true} /> */}
            <Container className='sponsor-div2'>
                <div>
                    <h4>OUR<br/>PARTNERS</h4>
                </div>
                <div className='sponsor-slider'>
                    <TinySlider settings={settings}>
                        <div className='sponsor-slider-div'><img src={adidas} alt="sponsor-1" /></div>
                        <div className='sponsor-slider-div'><img src={ameritrade} alt='sponsor-2' /></div>
                        <div className='sponsor-slider-div'><img src={altrusa} alt='sponsor-3' /></div>  
                        <div className='sponsor-slider-div'><img src={bmw} alt='sponsor-6' /></div>
                        <div className='sponsor-slider-div'><img src={jbl} alt='sponsor-7' /></div>
                        <div className='sponsor-slider-div'><img src={tesla} alt='sponsor-8' /></div>
                        <div className='sponsor-slider-div'><img src={adidas} alt="sponsor-9" /></div>
                        {/* <div className='sponsor-slider-div'><img src={ameritrade} alt='sponsor-10' /></div>
                        <div className='sponsor-slider-div'><img src={altrusa} alt='sponsor-11' /></div> */}
                    </TinySlider>
                </div>
            </Container>
        </div>
    );
}

export default Sponsor