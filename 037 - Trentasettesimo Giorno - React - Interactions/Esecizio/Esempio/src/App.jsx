import React, { useState } from "react";
import List from "./List";
import Button from "./Button";

function App() {
  const [displayList, setDisplayList] = useState(false);

  function handleClick() {
    setDisplayList((value) => !value);
    console.log(displayList);
  }

  return(
    <div>
      <Button onClick={handleClick}>
        Mostra/Nascondi Lista
      </Button>
      {displayList
      ? <List>
          Titolo della lista
        </List>
      : null}
    </div>
  )
}

export default App;