import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo_Enex.png';
import "./landingPage.css";
import getDateInPriFormat from '../HelperFunctions/getDateInPriFormat.js';

const interval = ['01/01/20', '31/01/20'];

class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fromDate: null,
      toDate: null,
      fromDatePri: null,
      toDatePri: null,
    };
  }

  componentDidMount() {

  }

  handleChange = e => {
    const { name, value } = e.target;
    const priValue = getDateInPriFormat(value);
    if (name === "fromDate") {
      this.setState(
        {
          fromDate: value,  
          fromDatePri: priValue
        }, 
        () => console.log(this.state));  
    } else {
      this.setState(
        {
          toDate: value,  
          toDatePri: priValue
        }, 
        () => console.log(this.state));  
    }

  };

  handleSubmit = e => {
    e.preventDefault();

    if (true) {
      console.log(`
        --SUBMITTING--
        First Name: ${this.state.fromDate}
        Last Name: ${this.state.toDate}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };


  render() {
    return (
      <div className="wrapper" style={{ backgroundImage: `url(${logo})` }}>
        <div className="form-wrapper">
          <h1>Alegeti perioada</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="from__date">
              <label htmlFor="fromDate">De la data</label>
              <input
                placeholder="First Name"
                type="date"
                name="fromDate"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="to__date">
              <label htmlFor="toDate">Pana la data</label>
              <input
                placeholder="Last Name"
                type="date"
                name="toDate"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="goToDashboard">
              <Link className="buttonWrapper" to={{
                pathname: '/dashboard',
                data: this.state
              }}
              >
                <button type="submit">Go to DASHBOARD</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );

  } // // end of render() method
} // end of LandingPage c class

export default LandingPage;
