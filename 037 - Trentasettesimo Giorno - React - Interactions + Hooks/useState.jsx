// **USE STATE**
/*
When we call the 
Preview: Docs Loading link description
useState()
 function, it returns an array with two values:

The current state: The current value of this state.
The state setter: A function that we can use to update the value of this state.
*/
// import the default export and the named export `useState` from the 'react' library
import React, { useState } from 'react';


export default function ColorPicker() {
  // call useState and assign its return values to `color` and `setColor`
 const [color, setColor] = useState('Tomato');
 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor('Aquamarine')}>
        Aquamarine
      </button>
      <button onClick={() => setColor('BlueViolet')}>
        BlueViolet
      </button>
      <button onClick={() => setColor('Chartreuse')}>
        Chartreuse
      </button>
      <button onClick={() => setColor('CornflowerBlue')}>
        CornflowerBlue
      </button>
    </div>
  );
}

import React, { useState } from 'react';

// regex to match numbers between 1 and 10 digits long
const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
  // declare current state and state setter 
  const [phone, setPhone] = useState('')
  const handleChange = ({ target })=> {
    const newPhone = target.value;
    const isValid = validPhoneNumber.test(newPhone);
    if (isValid) {
        setPhone(newPhone)
    }
    
  };

  return (
    <div className='phone'>
      <label for='phone-input'>Phone: </label>
      <input id='phone-input' value={phone} onChange={handleChange} />
    </div>
  );
}