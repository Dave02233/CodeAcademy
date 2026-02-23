import React, {useState} from "react";
import "./Button.css";

function Button() {
    const [count, setCount] = useState(0);
    const handleClickIncrement = () => setCount(count + 1);
    const handleClickDecrement = () => setCount(count - 1);

    return(
        <div className="button-container">
            <h1>Value: {count}</h1>
            <button onClick={handleClickIncrement}>Increment</button>
            <button onClick={handleClickDecrement}>Decrement</button>
        </div>
    )
}

export default Button;