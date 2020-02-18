import React, { Component } from 'react';
import EnergyInputData from '../../components/energy-input-data'
import EnergyInputGraphs from '../../components/energy-input-graphs'
import LoadingAnima from '../../components/loading-anima'
import prepareRootData from '../../helper-functions/prepareRootData.js'

import './dashboard.css';

class App extends Component {

  constructor(props) {

    super(props);

    this.state = {
      isFetching: true,
      data: {}
    };
  } // end of constructor


  fetchData() {
    let { fromDatePri, toDatePri } = this.props.location.data;
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
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            fromDate: fromDatePri,
            toDate: toDatePri
          })
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
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            fromDate: fromDatePri,
            toDate: toDatePri
          })

        })
      const chIndir = await parseBody(responseObject);

      /* Merg mai departe cu constructia paginii */
      const pieteComponents = prepareRootData(treniData, piete, tipuriTranzactii);

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
    this.fetchData();
  }

  render() {
    let perioada = {...this.props.location.data};
    return (
      this.state.isFetching
        ? <LoadingAnima />
        : <div className="dashboard">
          <EnergyInputData perioada={perioada} globalData={this.state.data} />
          <EnergyInputGraphs globalData={this.state.data} />
        </div>
    );
  }
}

export default App;

