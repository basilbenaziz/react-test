import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home.js";
import Leaderboard from "./Leaderboard.js";
import Play from "./Play.js";
import Reward from "./Reward.js";
import History from "./History.js";
import Challenge from "./Challenge.js";
import TopBar from "./TopBar.js";
import LoginCard from "./LoginCard.js";

function App() {
  return (
    <Router>
      {/* TopBar is placed outside Routes so it appears on all pages */}
      <TopBar />

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/challenge" element={<Challenge />} />
        <Route path="/history" element={<History />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/play" element={<Play />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/loginCard" element={<LoginCard />} />

        {/* You can add a default route to Home or any other component */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
