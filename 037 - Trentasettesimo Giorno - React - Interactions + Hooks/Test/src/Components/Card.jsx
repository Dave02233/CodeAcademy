import React, { useState } from "react";
import Button from "./Button";
import "./Card.css";

function Card() {
    const [visibleData, setVisibleData] = useState(false);
    const handleClick = () => setVisibleData(!visibleData);

    return (
        <div className="card-container">
            <button id="toggleVisibility" onClick={handleClick}>
                {visibleData 
                ? "Hide Buttons"
                : "Show Buttons"
                }
            </button>
            {visibleData
            ? <Button />
            : <h1>Click to show the buttons</h1>}
        </div>
    )
}

export default Card;