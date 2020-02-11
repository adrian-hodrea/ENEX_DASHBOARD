import React, { Component } from 'react';
import EnergyInputData from './Components/EnergyInputData/EnergyInputData.js'
import EnergyInputGraphs from './Components/EnergyInputGraphs/EnergyInputGraphs.js'
import prepareRootData from './HelperFunctions/prepareRootData.js'

import './App.css';

class App extends Component {

  constructor(props) {
    console.log("Props din App Constructor", props.location.data);

    super(props);

    this.state = {
      isFetching: true,
      data: {}
    };
  } // end of constructor


  fetchData() {
    const host = "http://192.168.0.4:3000";
    const apiTreni = host + '/api/treni';
    const apiPiete = host + '/api/piete';
    const apiTipTranzactii = host + '/api/tip_tranzactii';
    const apiChIndir = host + '/api/ch_indir';
    let self = this;
    (async function () {

      const parseBody = data => {
        return data.json();
      }
      /* Aduc datele referitoare la tranzactii */
      let responseObject = await fetch(apiTreni,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })

      const treniData = await parseBody(responseObject);
      /* Aduc nomenclatorul de piete*/
      responseObject = await fetch(apiPiete,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
      const piete = await parseBody(responseObject);
      /* Aduc nomenclatorul de tipuri tranzactii*/
      responseObject = await fetch(apiTipTranzactii,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
      const tipuriTranzactii = await parseBody(responseObject);
      /* Aduc cheltuielile indirecte */
      responseObject = await fetch(apiChIndir,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
      const chIndir = await parseBody(responseObject);

      /* Merg mai departe cu constructia paginii */
      const pieteComponents = prepareRootData(treniData, piete, tipuriTranzactii);

      console.log("pieteComponents din constructor", pieteComponents);
      console.log("This din fetch method", self);
      self.setState({
        data: {
          energyData: pieteComponents,
          indirData: chIndir
        },
        isFetching: false
      });

    })();
  }

  componentDidMount() {
    console.log("Am intrat pe Component DID Mount")
    this.fetchData();
  }

  render() {
    console.log("App component render method reached");
    console.log(" this.state.isFetching:", this.state.isFetching)
    return (
      this.state.isFetching
        ? <div>Fetching sweet data for you</div>
        : <div className="app">
            <EnergyInputData globalData={this.state.data} />
            <EnergyInputGraphs globalData={this.state.data} />
        </div>
    );
  }
}

export default App;

