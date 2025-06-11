import React from "react";

function App({ items = ['default 1', 'default 2'] }) {
  return(
    <div>
      <h1>TITLE</h1>
      <ul>
        {items.map(item => {
          return <li key={item + '_key'}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default App;