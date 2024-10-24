import React from "react";
import "../css/history.css"; // Import your CSS file
import "../css/globals.css";
import "../css/styleguide.css";

const HistoryList = ({ gameData }) => {
    return (
        <div className="history-history-container label">
            <div className="history-history-top-bar">
                <div>SORT BY:</div>
                <div>DATE</div>
                <div>SCORE</div>
                <div>DIFFICULTY</div>
            </div>

            <div className="history-history-top-bar">
                <div>TYPE:</div>
                <div>DIFFICULTY RATING</div>
                <div>USER</div>
                <div>SCORE</div>
                <div>DATE</div>
            </div>

            <img style={{ width: "100%" }} src="img/divider.svg" alt="Divider" />

            {gameData.map((game) => (
                <div className="history-row" key={game.id}>
                    <div className="history-column">
                        <img className="history-his-img" src={game.imgSrc} alt="Game type" />
                        <div className="label">{game.type}</div>
                    </div>

                    <div className="history-column">
                        <div className="history-flex-col">
                            <div className="history-expert label">{game.difficulty}</div>
                        </div>
                    </div>

                    <div className="history-column">
                        <img className="" src={game.userImg} alt="user" />
                        <div className="label">{game.players}</div>
                    </div>

                    <div className="history-column label">{game.score}</div>

                    <div className="history-column label">{game.date}</div>
                </div>
            ))}
        </div>
    );
}


const HistoryLastGame = ({ lastGame }) => {
    return (
        <>
            <div className="history-last-game-container">
                <h1 className="title h3">Last Game:</h1>

                <div className="history-last-game-row">
                    <img
                        className="last-game-img"
                        src="img/encryption.svg"
                        alt="Phishing Credit Card"
                    />
                    <div className="h3">{lastGame.type}</div>
                </div>

                <div className="history-last-game-col">
                    <div className="h3">DIFFICULTY</div>
                    <div className="history-last-game-row">
                        <img
                            className="history-last-game-img"
                            src="img/encryption.svg"
                            alt="Phishing Credit Card"
                        />
                        <div className="label">{lastGame.difficulty}</div>
                    </div>
                </div>

                <div className="history-last-game-col">
                    <div className="h3">USER</div>
                    <div className="history-last-game-row">
                        <img className="history-his-img" src="img/login.svg" alt="user" />
                        <div className="label">{lastGame.players}</div>
                    </div>
                </div>

                <div className="history-last-game-col">
                    <div className="h3">SCORE</div>
                    <div className="label">{lastGame.score}</div>
                </div>

                {/* <img className="history-his-img" src="img/refrech.svg" alt="Refresh" /> */}
            </div>
        </>
    );

}










function History() {
    const lastGame = {
        id: 1,
        type: "RECON",
        difficulty: "DIFFICULT",
        players: "2 VS 2",
        score: 400,
        date: "20/06/2024",
        imgSrc: "img/encryption.svg",
        userImg: "img/login.svg",
    };
    const gameData = [
        {
            id: 1,
            type: "RECON",
            difficulty: "DIFFICULT",
            players: "2 VS 2",
            score: 400,
            date: "20/06/2024",
            imgSrc: "img/encryption.svg",
            userImg: "img/login.svg",
        },
        {
            id: 2,
            type: "RECON",
            difficulty: "HARD",
            players: "3 VS 3",
            score: 100,
            date: "20/06/2024",
            imgSrc: "img/encryption.svg",
            userImg: "img/login.svg",
        },
        {
            id: 3,
            type: "RECON",
            difficulty: "NORMAL",
            players: "1 VS 1",
            score: 50,
            date: "13/03/2024",
            imgSrc: "img/encryption.svg",
            userImg: "img/login.svg",
        },
        // Add more game history data here as needed
    ];


    

    return (
        <div className="screen" >

            <div className="history-main">

                <HistoryLastGame lastGame={lastGame} />

                <HistoryList gameData={gameData} />

            </div>
        </div >
    );
}

export default History;
