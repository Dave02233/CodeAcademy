import React, { useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  
useEffect(() => {
  const timeRemaining = thought.expiresAt - Date.now();
  const timer = setTimeout(() => removeThought(thought.id), timeRemaining);
  return () => {
    clearTimeout(timer);
  };
}, [thought]);


  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}
