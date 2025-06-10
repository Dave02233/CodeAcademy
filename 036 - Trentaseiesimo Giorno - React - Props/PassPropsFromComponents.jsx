import React from 'react';

function Player(props) {
  return (
    <>
      <h1>{props.songName}</h1>
      <h2>{props.artist}</h2>
    </>
  );
}

export default Player;

//
import React from 'react';
import Player from './Player';

function App() {
  return(
  <Player songName="Nome Canzone" artist="Pippo Baudo"/>
  );
}

export default App;