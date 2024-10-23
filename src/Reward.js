import React from "react";
import "./reward.css"; // Import your CSS file

function Reward() {
  // Array to dynamically render locked trophies
  const rewards = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    status: "LOCKED", // You can later replace this with dynamic statuses like 'UNLOCKED'
    imgSrc: "img/medal.svg", // Image source for the reward
    altText: "Trophy",
  }));

  return (
    <div className="screen">
      <div className="main">
        <div className="row">
          {/* Dynamically render each reward */}
          {rewards.map((reward) => (
            <div className="col" key={reward.id}>
              <img
                className="reward-img"
                src={reward.imgSrc}
                alt={reward.altText}
              />
              <div className="label">{reward.status}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reward;
