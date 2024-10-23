import React from "react";
import "../css/play.css";
import "../css/globals.css";
import "../css/styleguide.css";
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
        <div className="play-main screen">
            <h1 className="h1">Select Challenge</h1>

            <div className="play-challenge-container">
                {/* Challenge Selection with Checkbox */}
                <label className="play-custom-checkbox">
                    <input type="checkbox" id="checkbox1" />
                    <img
                        className="play-challenge-img"
                        src="img/encryption.svg"
                        alt="encryption challenge"
                    />
                    <div style={{padding: '10px',}} className="label">encryption</div>
                </label>

                <label className="play-custom-checkbox">
                    <input type="checkbox" id="checkbox2" />
                    <img
                        className="play-challenge-img"
                        src="img/encryption.svg"
                        alt="encryption challenge"
                    />
                    <div style={{padding: '10px',}} className="label">encryption</div>
                </label>
            </div>

            <div className="play-player-container">
                <div className="play-player-info">
                    <img
                        className="play-player-img-container"
                        src="img/login.svg"
                        alt="player avatar"
                    />
                    <div className="h1">PAWTATO</div>
                </div>

                <img className="play-invite-frame" src="img/login.svg" alt="invite friend" />
            </div>

            <button className="play-play-button h1" onClick={goChallenge}>
                Play
            </button>
        </div>
    );
}

export default Play;
