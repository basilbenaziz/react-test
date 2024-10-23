import React from "react";
import "./css/history.css"; // Import your CSS file
import "./css/globals.css";
import "./css/styleguide.css";

function History() {
  const gameData = [
    {
      type: "RECON",
      difficulty: "DIFFICULT",
      players: "2 VS 2",
      score: 400,
      date: "20/06/2024",
      imgSrc: "img/encryption.svg",
      userImg: "img/login.svg",
    },
    // Add more game history data here as needed
  ];

  return (
    <div className="history screen">
      <div className="main">
        <div className="last-game-container">
          <h1 className="title h3">Last Game:</h1>

          <div className="last-game-row">
            <img
              className="last-game-img"
              src="img/encryption.svg"
              alt="Phishing Credit Card"
            />
            <div className="h3">Phishing</div>
          </div>

          <div className="last-game-col">
            <div className="h3">DIFFICULTY</div>
            <div className="last-game-row">
              <img
                className="last-game-img"
                src="img/encryption.svg"
                alt="Phishing Credit Card"
              />
              <div className="label">EXPERT</div>
            </div>
          </div>

          <div className="last-game-col">
            <div className="h3">USER</div>
            <div className="last-game-row">
              <img className="his-img" src="img/login.svg" alt="user" />
              <div className="label">1 VS 1</div>
            </div>
          </div>

          <div className="last-game-col">
            <div className="h3">SCORE</div>
            <div className="label">500</div>
          </div>

          <img className="his-img" src="img/refrech.svg" alt="Refresh" />
        </div>

        <div className="history-container label">
          <div className="history-top-bar">
            <div>SORT BY:</div>
            <div>DATE</div>
            <div>SCORE</div>
            <div>DIFFICULTY</div>
          </div>

          <div className="history-top-bar">
            <div>TYPE:</div>
            <div>DIFFICULTY RATING</div>
            <div>USER</div>
            <div>SCORE</div>
            <div>DATE</div>
          </div>

          <img style={{ width: "100%" }} src="img/divider.svg" alt="Divider" />

          {gameData.map((game, index) => (
            <div className="row" key={index}>
              <div className="column">
                <img className="his-img" src={game.imgSrc} alt="Game type" />
                <div className="label">{game.type}</div>
              </div>

              <div className="column">
                <div className="flex-col">
                  <div className="expert label">{game.difficulty}</div>
                </div>
              </div>

              <div className="column">
                <img className="" src={game.userImg} alt="user" />
                <div className="label">{game.players}</div>
              </div>

              <div className="column label">{game.score}</div>

              <div className="column label">{game.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default History;
