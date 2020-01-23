import React from 'react';
import EnergyInput from './Components/EnergyInput/EnergyInput.js'
import './App.css';

function App(props) {
  return (
    <div className="App">
      <EnergyInput globalData={props.globalData}/>
    </div>
  );
}

export default App;
