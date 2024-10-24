import React, { useState } from "react";
import "../css/globals.css";
import "../css/styleguide.css";
import "../css/challenge.css";






const Team = () => {
    return (
        <>

            <div className="chall-team-contaner">


                <div className="chall-team">
                    <div className="h3">Team 1</div>
                    <div className="chall-player">
                        <div className="chall-player-col-name">
                            <div className="label">PLAYER 2</div>
                            <div className="chall-photo">
                                <img className="chall-user-2" src="img/login.svg" alt="user" />
                            </div>
                        </div>
                        <div className="chall-player-col-id-score">
                            <div className="label">PLAYER ID:</div>
                            <div className="label">#1029</div>
                        </div>
                        <div className="chall-player-col-id-score">
                            <div className="label">SCORE:</div>
                            <div className="label-green">100</div>
                        </div>
                    </div>

                    <div className="chall-player">
                        <div className="chall-player-col-name">
                            <div className="label">PLAYER 2</div>
                            <div className="chall-photo">
                                <img className="chall-user-2" src="img/login.svg" alt="user" />
                            </div>
                        </div>
                        <div className="chall-player-col-id-score">
                            <div className="label">PLAYER ID:</div>
                            <div className="label">#1029</div>
                        </div>
                        <div className="chall-player-col-id-score">
                            <div className="label">SCORE:</div>
                            <div className="label">-100</div>
                        </div>
                    </div>
                </div>


                <div className="h1">VS</div>


                <div className="chall-team">
                    <div className="h3">Team 2</div>
                    <div className="chall-player">
                        <div className="chall-player-col-name">
                            <div className="label">PLAYER 2</div>
                            <div className="chall-photo">
                                <img className="chall-user-2" src="img/login.svg" alt="user" />
                            </div>
                        </div>
                        <div className="chall-player-col-id-score">
                            <div className="label">PLAYER ID:</div>
                            <div className="label">#1029</div>
                        </div>
                        <div className="chall-player-col-id-score">
                            <div className="label">SCORE:</div>
                            <div className="label">-100</div>
                        </div>
                    </div>

                    <div className="chall-player">
                        <div className="chall-player-col-name">
                            <div className="label">PLAYER 2</div>
                            <div className="chall-photo">
                                <img className="chall-user-2" src="img/login.svg" alt="user" />
                            </div>
                        </div>
                        <div className="chall-player-col-id-score">
                            <div className="label">PLAYER ID:</div>
                            <div className="label">#1029</div>
                        </div>
                        <div className="chall-player-col-id-score">
                            <div className="label">SCORE:</div>
                            <div className="label">-100</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};




const IPandTime = () => {
    return (
        <>
            <div className="chall-challenge-conect">
                <div className="chall-challenge-conect-row">
                    <div className="h1">IP</div>
                    <div className="h2">192.168.11.100</div>
                    <div className="eyebrow">OPENVPN</div>
                </div>

                <div className="chall-challenge-conect-row">
                    <h1 className="h1">Time Remaining</h1>
                    <div className="h2">1:30:53 h</div>
                </div>

                <div className="chall-challenge-conect-row">
                    <div className="h1">Your Score</div>
                    <div className="h2 text-22">-100</div>
                </div>
            </div>

        </>
    )

};


const Flag = () => {
    const [mainFlag, setMainFlag] = useState("");
    const [subFlag1, setSubFlag1] = useState("");
    const [subFlag2, setSubFlag2] = useState("");

    // Handle form submission for the flags
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Main Flag Submitted:", mainFlag);
        console.log("Sub Flag 1 Submitted:", subFlag1);
        console.log("Sub Flag 2 Submitted:", subFlag2);
        // Add validation or further submission logic here
    };

    return (
        <>
            <div className="chall-challenge-col-flags">
                <div className="chall-flag">
                    <div className="text-input">
                        <div className="label">Main Flag</div>
                        <form className="form-input" onSubmit={handleSubmit}>
                            <input
                                className="input-place-holder"
                                name="flag"
                                type="text"
                                placeholder="CTF-H4ne*******"
                                value={mainFlag}
                                onChange={(e) => setMainFlag(e.target.value)}
                            />
                            <button className="button-Default" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <div className="chall-flag">
                    <div className="text-input">
                        <div className="label">Sub-Flag</div>
                        <form className="form-input" onSubmit={handleSubmit}>
                            <input
                                className="input-place-holder"
                                name="sub-flag-1"
                                type="text"
                                placeholder="CTF-H4ne*******"
                                value={subFlag1}
                                onChange={(e) => setSubFlag1(e.target.value)}
                            />
                            <button className="button-Default" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

                <div className="chall-flag">
                    <div className="text-input">
                        <div className="label">Sub-Flag</div>
                        <form className="form-input" onSubmit={handleSubmit}>
                            <input
                                className="input-place-holder"
                                name="sub-flag-2"
                                type="text"
                                placeholder="CTF-H4ne*******"
                                value={subFlag2}
                                onChange={(e) => setSubFlag2(e.target.value)}
                            />
                            <button className="button-Default" type="submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};


const ChallengeDetails = () => {
    return (
        <>
            <div className="chall-description">
                <div className="chall-challenge--description">
                    <div className="h4">CHALLENGE DESCRIPTION:</div>
                    <div className="eyebrow">
                        YOU'VE JUST RECEIVED AN INVITATION TO A PARTY. AUTHORITIES HAVE
                        REPORTED THAT THE PARTY IS CURSED, AND THE GUESTS ARE TRAPPED IN A
                        NEVER-ENDING UNSOLVABLE MURDER MYSTERY PARTY. CAN YOU INVESTIGATE
                        FURTHER AND TRY TO SAVE EVERYONE?
                    </div>
                </div>

                <div className="chall-challenge-col">
                    <div className="h4">TYPE</div>
                    <img
                        className="chall-challenge-img"
                        src="img/encryption.svg"
                        alt="Analysis"
                    />
                    <div className="chall-recon label">RECON</div>
                </div>

                <div className="chall-challenge-col">
                    <div className="h4">DIFFICULTY</div>
                    <img
                        className="chall-challenge-img"
                        src="img/encryption.svg"
                        alt="Analysis"
                    />
                </div>

                <div className="chall-challenge-col">
                    <div className="h4">TOTAL SCORE</div>
                    <div className="label">300</div>
                </div>
            </div>

        </>
    );
};






function Challenge() {

    return (
        <div className="chall-main screen">

            <ChallengeDetails />
            <Team />

            <div className="chall-challenge-main">
                <Flag />
                <IPandTime />
            </div>
            
        </div>
    );
}

export default Challenge;
