import React from 'react';
import {comments} from './commentData';
import Card from "./Card";

function App() {
  return(
    <>
      {comments.map((comment, index) => <Card commentObject={comment} key={index} />
      )}
    </>
  )
}

export default App;
