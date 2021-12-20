import React from "react";
import '../css/committee.css';
import bgimg from '../img/bgcommittee.png';


function CommitteePage() {
    return (
        <>
            <div className="bg">
                <img src={bgimg} alt="" />
                <h1>Committees</h1>
                <p>"A group who keep minutes and waste hours."</p>
            </div>

            <div className="flex">
                <div class="card1">
                    <img src="https://source.unsplash.com/user/erondu/320x480" alt="Avatar" />
                    <div className="text1"><h3><b>SIT MUN</b></h3></div>
                    <div className="container">
                        <div className="text">Hello World</div>
                    </div>
                </div>

                <div class="card1">
                    <img src="https://source.unsplash.com/user/erondu/320x480" alt="Avatar" />
                    <div className="text1"><h3><b>SIT MUN</b></h3></div>
                    <div className="container">
                        <div className="text">Hello World</div>
                    </div>
                </div>

                <div class="card1">
                    <img src="https://source.unsplash.com/user/erondu/320x480" alt="Avatar" />
                    <div className="text1"><h3><b>SIT MUN</b></h3></div>
                    <div className="container">
                        <div className="text">Hello World</div>
                    </div>
                </div>

                <div class="card1">
                    <img src="https://source.unsplash.com/user/erondu/320x480" alt="Avatar" />
                    <div className="text1"><h3><b>SIT MUN</b></h3></div>
                    <div className="container">
                        <div className="text">Hello World</div>
                    </div>
                </div>

                <div class="card1">
                    <img src="https://source.unsplash.com/user/erondu/320x480" alt="Avatar" />
                    <div className="text1"><h3><b>SIT MUN</b></h3></div>
                    <div className="container">
                        <div className="text">Hello World</div>
                    </div>
                </div>

                <div class="card1">
                    <img src="https://source.unsplash.com/user/erondu/320x480" alt="Avatar" />
                    <div className="text1"><h3><b>SIT MUN</b></h3></div>
                    <div className="container">
                        <div className="text">Hello World</div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default CommitteePage;