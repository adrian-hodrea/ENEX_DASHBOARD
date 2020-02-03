import React from 'react';
import EnergyInputData from './Components/EnergyInputData/EnergyInputData.js'
import EnergyInputGraphs from './Components/EnergyInputGraphs/EnergyInputGraphs.js'

import './App.css';

function App(props) {
  console.log("Props din App",props);
  const {energyData} = props;
  const tipTranzTotals = energyData[energyData.length - 1].kpis;
  console.log("PtipTranzTotals",tipTranzTotals);

  return (
    <div className="app">
      <EnergyInputData globalData={props}/>
      <EnergyInputGraphs globalData={props}/>

    </div>
  );
}

export default App;
