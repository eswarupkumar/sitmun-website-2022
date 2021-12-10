import React from 'react'
import TinySlider from "tiny-slider-react";
import { Container } from 'react-bootstrap';
import adidas from '../../img/adidas-9.svg';
import ameritrade from '../../img/ameritrade-1.svg'; 
import altrusa from '../../img/altrusa-international-inc.svg';
import bmw from '../../img/bmw.svg';
import jbl from '../../img/jbl-1.svg'
import tesla from '../../img/tesla-motors-1.svg';
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
        <Container className='sponsor-div'>
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
    );
}

export default Sponsor