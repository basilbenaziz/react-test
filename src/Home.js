import React from "react";
import "./home.css";
import "./globals.css";
import "./styleguide.css";

function Home() {
  return (
    <div className="screen">
      <div className="main">
        <img className="logo" src="img/logo.svg" alt="Logo" />

        <div className="top">
          <div className="news">
            <div className="news-col">
              <div className="newa-title-img">
                <div className="news-img"></div>
                <h1 className="newa-title h1">Burp Suite</h1>
              </div>
              <p className="news-pra h5">
                Burp Suite is a proprietary software tool for security
                assessment and penetration testing of web applications. It was
                initially developed in 2003-2006 by Dafydd Stuttard to automate
                his own security testing needs, after realizing the capabilities
                of automatable web tools like Selenium. Stuttard created the
                company PortSwigger to flagship Burp
                Suite&#39;s&nbsp;&nbsp;development. A community, professional,
                and enterprise version of this&nbsp;&nbsp;product are available.
              </p>
            </div>
          </div>

          <div className="leaderboard">
            <div className="leaderboard-label label">
              <div>TOP</div>
              <div>PLAYER</div>
              <div>SCORES</div>
            </div>

            <img src="img/divider.svg" alt="Divider" />

            <div className="leaderboard-players">
              {/* Loop for Leaderboard Players */}
              {Array.from({ length: 9 }, (_, i) => (
                <div className="leaderboard-row label" key={i}>
                  <div className="label">#2</div>
                  <div className="label">PAWTATO</div>
                  <div className="label">3000</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="all-frame">
          {/* Buttons leading to external links */}
          {Array.from({ length: 4 }, (_, i) => (
            <button
              className="button"
              key={i}
              onClick={() => window.open("https://www.kali.org/", "_blank")}
            >
              <div className="x-frame">
                <div className="news-img"></div>
                <div className="h1">Kali</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
