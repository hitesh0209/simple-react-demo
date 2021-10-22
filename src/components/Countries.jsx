import React, { Component } from "react";

class Countries extends Component {
  constructor() {
    super();
    this.state = {
      country: "",
    };
  }

  cont = (button, id) => {
    this.setState({
      // eslint-disable-next-line
      country: (this.state.country = ""),
      // eslint-disable-next-line
      country: this.state.country + button,
    });
    if (id === "0") {
      document.getElementById("in").style.display = "none";
      document.getElementById("en").style.display = "none";
      document.getElementById("ne").style.display = "none";
      document.getElementById("us").style.display = "none";
      document.getElementById("au").style.display = "none";
    }

    if (id === "1") {
      document.getElementById("in").style.display = "block";
      document.getElementById("en").style.display = "none";
      document.getElementById("ne").style.display = "none";
      document.getElementById("us").style.display = "none";
      document.getElementById("au").style.display = "none";
    }

    if (id === "2") {
      document.getElementById("in").style.display = "none";
      document.getElementById("en").style.display = "block";
      document.getElementById("ne").style.display = "none";
      document.getElementById("us").style.display = "none";
      document.getElementById("au").style.display = "none";
    }

    if (id === "3") {
      document.getElementById("in").style.display = "none";
      document.getElementById("en").style.display = "none";
      document.getElementById("ne").style.display = "block";
      document.getElementById("us").style.display = "none";
      document.getElementById("au").style.display = "none";
    }
    if (id === "4") {
      document.getElementById("in").style.display = "none";
      document.getElementById("en").style.display = "none";
      document.getElementById("ne").style.display = "none";
      document.getElementById("us").style.display = "block";
      document.getElementById("au").style.display = "none";
    }
    if (id === "5") {
      document.getElementById("in").style.display = "none";
      document.getElementById("en").style.display = "none";
      document.getElementById("ne").style.display = "none";
      document.getElementById("us").style.display = "none";
      document.getElementById("au").style.display = "block";
    }
  };

  render() {
    let { country } = this.state;

    return (
      <div>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-success dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Countries
          </button>
          <div className="dropdown-menu">
            <button
              className="dropdown-item"
              id="0"
              value="none"
              onClick={(e) => this.cont(e.target.value, e.target.id)}
            >
              Select country
            </button>
            <button
              className="dropdown-item"
              id="1"
              value="India"
              onClick={(e) => this.cont(e.target.value, e.target.id)}
            >
              IND
            </button>
            <button
              className="dropdown-item"
              id="2"
              value="England"
              onClick={(e) => this.cont(e.target.value, e.target.id)}
            >
              ENG
            </button>
            <button
              className="dropdown-item"
              id="3"
              value="Nepal"
              onClick={(e) => this.cont(e.target.value, e.target.id)}
            >
              NEP
            </button>
            <button
              className="dropdown-item"
              id="4"
              value="United States of America"
              onClick={(e) => this.cont(e.target.value, e.target.id)}
            >
              USA
            </button>
            <button
              className="dropdown-item"
              id="5"
              value="Australia"
              onClick={(e) => this.cont(e.target.value, e.target.id)}
            >
              AUS
            </button>
          </div>
        </div>
        <br />
        <br />
        <p>Data will be displayed here : {country}</p>
      </div>
    );
  }
}

export default Countries;
