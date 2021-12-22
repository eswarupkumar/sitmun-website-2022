import React from "react";
import '../css/committee.css';
import bgimg from '../img/bgcommittee.png';
import Navbar from "../components/common/navbar";
import Footer from "../components/common/Footer";
import ScrollTop from "../components/common/ScrollTop";


function CommitteePage() {
    return (
        <>
            <Navbar />  
            <ScrollTop />
            <div className="bg">
                <img src={bgimg} alt="" />
                <h1>Committees</h1>
                <p>"A group who keep minutes and waste hours."</p>
            </div>

            <div className="flex">
                <div class="card1">
                    <img src="https://source.unsplash.com/user/erondu/320x480" alt="Avatar" />
                    <div className="text1"><h3><b>SIT MUN</b></h3></div>
                    <div className="card-container">
                        <div className="text">Hello World</div>
                    </div>
                </div>

                <div class="card1">
                    <img src="https://source.unsplash.com/user/erondu/320x480" alt="Avatar" />
                    <div className="text1"><h3><b>SIT MUN</b></h3></div>
                    <div className="card-container">
                        <div className="text">Hello World</div>
                    </div>
                </div>

                <div class="card1">
                    <img src="https://source.unsplash.com/user/erondu/320x480" alt="Avatar" />
                    <div className="text1"><h3><b>SIT MUN</b></h3></div>
                    <div className="card-container">
                        <div className="text">Hello World</div>
                    </div>
                </div>

                <div class="card1">
                    <img src="https://source.unsplash.com/user/erondu/320x480" alt="Avatar" />
                    <div className="text1"><h3><b>SIT MUN</b></h3></div>
                    <div className="card-container">
                        <div className="text">Hello World</div>
                    </div>
                </div>

                <div class="card1">
                    <img src="https://source.unsplash.com/user/erondu/320x480" alt="Avatar" />
                    <div className="text1"><h3><b>SIT MUN</b></h3></div>
                    <div className="card-container">
                        <div className="text">Hello World</div>
                    </div>
                </div>

                <div class="card1">
                    <img src="https://source.unsplash.com/user/erondu/320x480" alt="Avatar" />
                    <div className="text1"><h3><b>SIT MUN</b></h3></div>
                    <div className="card-container">
                        <div className="text">Hello World</div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}


export default CommitteePage;