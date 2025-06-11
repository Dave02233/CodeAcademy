import React, {useState} from "react";
import Card from "./Components/Card";
import "./App.css";

function App() {

    const [cards, setCards] = useState([<Card />]);
    const [error, setError] = useState(false);

    function handleClick() {
        if(cards.length < 6) {
            setCards([...cards, cards.length]);
            setError(false);
        }else{
            setError(true);
        }
    }
    return(
        <>
            <h1>Test Interazioni</h1>
            {!error ? (
                <>
                    <button className="add-Card" onClick={handleClick}>+</button>
                    {cards.map((id) => (
                        <Card key={id} />
                    ))}
                </>
            ) : (
                <h2>Errore: <br></br> Troppe Card</h2>
            )}
        </>
    )
}

export default App;