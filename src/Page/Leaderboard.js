import React from "react";
import "../css/leaderboard.css"; // Import the CSS file
import "../css/globals.css";
import "../css/styleguide.css";




const PlayerDetail = ({ player }) => {
    return (
        <div className="player-details">
            <div className="player-details-row">
                <img className="player-img" src="img/login.svg" alt="Player Avatar" />

                <div className="player-title">
                    <div className="label">PLAYER</div>
                    <div className="h2">{player.name}</div>
                </div>

                <div className="player-title">
                    <div className="label">Top</div>
                    <div className="h2">{player.rank}</div>
                </div>

                <div className="player-title">
                    <div className="label">Rank</div>
                    <img
                        style={{ height: "116px" }}
                        src="img/login.svg"
                        alt="Player Rank"
                    />
                </div>

                <div className="player-title">
                    <div className="label">Score</div>
                    <div className="h2">{player.score}</div>
                </div>

                <div className="player-title">
                    <div className="label">Win Rate</div>
                    <div className="h2">{player.winRate}</div>
                </div>
            </div>
        </div>
    );
};



const PlayerLeaderboard = ({ players }) => {
    return (
        <>
            <div className="system">
                <div className="system-top-bar label">
                    <div>TOP</div>
                    <div>RANK</div>
                    <div>PLAYER</div>
                    <div>ID</div>
                    <div>SCORES</div>
                    <div>WIN RATE</div>
                </div>

                <img className="divider" src="img/divider.svg" alt="Divider" />

                {/* Loop through player data */}
                {players.map((player) => (
                    <div className="system-row" key={player.id}>
                        <div className="label">{player.rank}</div>
                        <img
                            className="system-row-img"
                            src="img/login.svg"
                            alt="Player Avatar"
                        />

                        <div className="system-row-name">
                            <img
                                className="system-row-img"
                                src="img/login.svg"
                                alt="Player Avatar"
                            />
                            <div className="label">{player.name}</div>
                        </div>

                        <div className="label">{player.id}</div>
                        <div className="label">{player.score}</div>
                        <div className="label">{player.winRate}</div>
                    </div>
                ))}
            </div>
        </>
    );
};




function Leaderboard() {
    // Sample player data for rendering dynamically
    const myPlayer = { rank: "#1", name: "Shrqawi", id: "#3342756", score: 3050, winRate: 2.2 };
    const players = [
        { rank: "#1", name: "Shrqawi", id: "#3342756", score: 3050, winRate: 2.2 },
        { rank: "#2", name: "PAWTATO", id: "#3342756", score: 3000, winRate: 2.1 },
        // Add more players here
    ];


    return (
        <div className="main screen">
            {/* Player details at the top */}
            <PlayerDetail player={myPlayer} />
            {/* Leaderboard System */}
            <PlayerLeaderboard players={players} />
        </div>
    );
}

export default Leaderboard;
