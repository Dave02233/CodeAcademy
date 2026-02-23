import React from 'react';
import ReactDOM from 'react-dom';

import PropsDisplayer from './PropsDisplayer';

function App() {
  return <PropsDisplayer myProp="Hello"/>;
}

export default App;


//
import React from 'react';

function PropsDisplayer(props) {
  	const stringProps = JSON.stringify(props);
    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
}

export default PropsDisplayer;