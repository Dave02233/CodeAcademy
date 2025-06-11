import React from "react";

function List({ items = ['default 1', 'default 2'], children }) {
  return(
    <div>
        <h1>{children}</h1>
        <ul>
        {items.map(item => {
            return <li key={item + '_key'}>{item}</li>
        })}
        </ul>
    </div>
  )
}

export default List;