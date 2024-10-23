import React from "react";
import "./play.css";
import "./globals.css";
import "./styleguide.css";
import { useNavigate } from "react-router-dom";

function Play() {
    const navigate = useNavigate();
    // Function to handle the Play button click
    // const goChallenge = () => {
    //     console.log("Challenge started!");
    //     // You can add your challenge logic or navigation here
    // };
    const goChallenge = () => navigate('/challenge');

    return (
        <div className="main screen">
            <h1 className="h1">Select Challenge</h1>

            <div className="challenge-container">
                {/* Challenge Selection with Checkbox */}
                <label className="custom-checkbox">
                    <input type="checkbox" id="checkbox1" />
                    <img
                        className="challenge-img"
                        src="img/encryption.svg"
                        alt="encryption challenge"
                    />
                    <div className="label">encryption</div>
                </label>

                <label className="custom-checkbox">
                    <input type="checkbox" id="checkbox2" />
                    <img
                        className="challenge-img"
                        src="img/encryption.svg"
                        alt="encryption challenge"
                    />
                    <div className="label">encryption</div>
                </label>
            </div>

            <div className="player-container">
                <div className="player-info">
                    <img
                        className="player-img-container"
                        src="img/login.svg"
                        alt="player avatar"
                    />
                    <div className="h1">PAWTATO</div>
                </div>

                <img className="invite-frame" src="img/login.svg" alt="invite friend" />
            </div>

            <button className="play-button h1" onClick={goChallenge}>
                Play
            </button>
        </div>
    );
}

export default Play;
