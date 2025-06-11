import React from 'react';
import Button from './Button.js';

function App() {
  return <Button text=""/>;
}

export default App

//

import React from 'react';

function Button(props) {
  
    return (
      <button>{props.text}</button>
    );
}
Button.defaultProps = {
  text: 'Default Text of Big Button',
}

export default Button;