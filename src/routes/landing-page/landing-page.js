import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo_Enex.png';
import "./landing-page.css";
import getDateInPriFormat from '../../helper-functions/get-date-in-orcl-format.js';
import checkFirstDayOfMonth from '../../helper-functions/check-if-is-first-day-of-month.js';
import checkLastDayOfMonth from '../../helper-functions/check-if-is-last-day-of-month.js';


class LandingPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      fromDate: null,
      toDate: null,
      fromDatePri: null,
      toDatePri: null,
      fdtValidated: false,
      tdtValidated: false,
    };
  }

  componentDidMount() {

  }

  handleChange = e => {
    const { name, value } = e.target;

    if (name === "fromDate") {
      let fdtok = checkFirstDayOfMonth(value);
      if (!fdtok) {
        alert("Data introdusa nu este inceput de luna. Introduceti o data care reprezinta inceput de luna!")
        this.setState({ fdtValidated: false })
      } else {
        const priValue = getDateInPriFormat(value);
        this.setState(
          {
            fromDate: value,
            fromDatePri: priValue,
            fdtValidated: true
          },
          () => console.log(this.state));
      }
    } else {    // name === "toDate"
      let tdtok = checkLastDayOfMonth(value);
      if (!tdtok) {
        alert("Data introdusa nu este sfarsit de luna. Introduceti o data care reprezinta sfarsit de luna!")
        this.setState({ tdtValidated: false })
      } else {
        const priValue = getDateInPriFormat(value);
        this.setState(
          {
            toDate: value,
            toDatePri: priValue,
            tdtValidated: true
          },
          () => console.log(this.state));
      }
    }
  };

  handleSubmit = e => {
    let fromDate = new Date(this.state.fromDate);
    let toDate = new Date(this.state.toDate);
    if (fromDate < toDate) {
      if (!this.state.fdtValidated || !this.state.tdtValidated) {
        e.preventDefault();
        alert("Data de inceput nu reprezinta prima zi din luna sau data de sfarsit nu reprezinta ultima zi din luna")
      } 
    } else {
      e.preventDefault();
      alert("Data de inceput este mai mare decat data de sfarsit")
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
              <Link
                className="buttonWrapper"
                to={{
                  pathname: '/dashboard',
                  data: this.state
                }}
                onClick={this.handleSubmit}
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
