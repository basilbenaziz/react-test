import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/topBar.css'; // Import your CSS styles
import '../css/globals.css'; // Import your CSS styles
import '../css/styleguide.css'; // Import your CSS styles

function TopBar() {
    const navigate = useNavigate(); // useNavigate hook for programmatic navigation

    // Navigation functions
    const goHome = () => navigate('/home');
    const goReward = () => navigate('/reward');
    const goHistory = () => navigate('/history');
    const goPlay = () => navigate('/play');
    const goLeaderboard = () => navigate('/leaderboard');
    const goLogin = () => navigate('/loginCard');
    // const goChallenge = () => navigate('/challenge');
    const logout = () => {
        // Add your logout logic here (e.g., clearing tokens, logging out the user, etc.)
        console.log("Logging out...");
        navigate('/login');
    };

    return (
        <div className="top-bar-half">
            <button className="nav-Butt" onClick={goHome}>
                <div className="nav-icon">
                    <img className="nav-icon-image" src="/img/Home.svg" alt="Home" />
                    <div className="label">HOME</div>
                </div>
            </button>

            <button className="nav-Butt" onClick={goLogin}>
                <div className="nav-icon">
                    <img className="nav-icon-image" src="/img/login.svg" alt="Login" />
                    <div className="label">LOGIN</div>
                </div>
            </button>

            <button className="nav-Butt" onClick={goReward}>
                <div className="nav-icon">
                    <img className="nav-icon-image" src="/img/REWARD.svg" alt="Reward" />
                    <div className="label">REWARD</div>
                </div>
            </button>

            <button className="nav-Butt" onClick={goHistory}>
                <div className="nav-icon">
                    <img className="nav-icon-image" src="/img/history.svg" alt="History" />
                    <div className="label">HISTORY</div>
                </div>
            </button>

            <button className="nav-Butt" onClick={goLeaderboard}>
                <div className="nav-icon">
                    <img className="nav-icon-image" src="/img/leaderboard.svg" alt="Leaderboard" />
                    <div className="label">LEADERBOARD</div>
                </div>
            </button>

            <button className="nav-Butt" onClick={logout}>
                <div className="nav-icon">
                    <img className="nav-icon-image" src="/img/logout.svg" alt="Logout" />
                    <div className="label">LOGOUT</div>
                </div>
            </button>

            <button className="nav-Butt" onClick={goPlay}>
                <div className="play-icon">
                    <div className="label">PLAY</div>
                </div>
            </button>
        </div>
    );
}

export default TopBar;
