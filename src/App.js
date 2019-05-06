import React from 'react';
import Pokegame from './Pokegame'
import './App.css';

function App() {

  return (

    <div className="App">
    <a href="javascript:location.reload(true)"><button className="deal-hand" type="button">Deal a New Hand</button></a>
      <Pokegame />
    </div>
  );
}

export default App;
