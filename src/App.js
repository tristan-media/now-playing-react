import React, { Component } from 'react';
import './App.css';
import Piece from './Piece'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Now Playing</h1>
        <Piece source="counterstream" name="Counterstream Radio" url="http://counterstreamradio.net/" />
        <Piece source="dronezone" name="Dronze Zone" url="http://somafm.com/dronezone/" />
        <Piece source="earwaves" name="Earwaves" url="http://somafm.com/earwaves/" />
        <Piece source="q2" name="Q2 Music" url="http://q2music.org/" />
        <Piece source="yle" name="Yle Klassinen" url="http://yle.fi/radio/yleklassinen/suora/" />
      </div>
    );
  }
}

export default App;
