import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Page/Home.js";
import Leaderboard from "./Page/Leaderboard.js";
import Play from "./Page/Play.js";
import Reward from "./Page/Reward.js";
import History from "./Page/History.js";
import Challenge from "./Page/Challenge.js";
import TopBar from "./components/TopBar.js";
import LoginCard from "./Page/LoginCard.js";

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
        {/* <Route path="/loginCard" element={<LoginCard />} /> */}
        // if he click on login button then we will show login card on top of the page
        <Route path="/loginCard" element={<LoginCard />} />

        {/* You can add a default route to Home or any other component */}
        <Route path="/" element={<Home />} />
      </Routes>





    </Router>
  );
}

export default App;
