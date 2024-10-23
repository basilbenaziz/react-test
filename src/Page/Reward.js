import React from "react";
import "../css/reward.css";
import "../css/globals.css";
import "../css/styleguide.css";
import medal from '../img/medal.svg';


function Reward() {
    // Array to dynamically render locked trophies
    const rewards = Array.from({ length: 6 }, (_, i) => (
        {
            id: i,
            status: "LOCKED", // You can later replace this with dynamic statuses like 'UNLOCKED'
            imgSrc: medal, // Image source for the reward
            altText: "Trophy",
        }
    ));

    return (
        <div className="screen">
            <div className="rewa-main">
                <div className="rewa-row">
                    {/* Dynamically render each reward */}


                    {rewards.map((reward) => (
                        <div className="rewa-col" key={reward.id}>
                            <img
                                className="rewa-reward-img"
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
