import React, { Component } from "react";
import Australia from "./Australia";
import England from "./England";
import India from "./India";
import Nepal from "./Nepal";
import USA from "./USA";

class Country extends Component {
  constructor() {
    super();
    this.state = {
      showAustralia: false,
      showEngland: false,
      showIndia: false,
      showNepal: false,
      showUSA: false,
    };
    this.upco = this.upco.bind(this);
  }

  upco(button) {
    if (button === "Australia") {
      this.setState({
        showAustralia: true,
        showEngland: false,
        showIndia: false,
        showNepal: false,
        showUSA: false,
      });
    } else if (button === "England") {
      this.setState({
        showAustralia: false,
        showEngland: true,
        showIndia: false,
        showNepal: false,
        showUSA: false,
      });
    } else if (button === "India") {
      this.setState({
        showAustralia: false,
        showEngland: false,
        showIndia: true,
        showNepal: false,
        showUSA: false,
      });
    } else if (button === "Nepal") {
      this.setState({
        showAustralia: false,
        showEngland: false,
        showIndia: false,
        showNepal: true,
        showUSA: false,
      });
    } else if (button === "USA") {
      this.setState({
        showAustralia: false,
        showEngland: false,
        showIndia: false,
        showNepal: false,
        showUSA: true,
      });
    } else {
      this.setState({
        showAustralia: false,
        showEngland: false,
        showIndia: false,
        showNepal: false,
        showUSA: false,
      });
    }
  }
  render() {
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
              value="none"
              onClick={(e) => this.upco(e.target.value)}
            >
              Select country
            </button>
            <button
              className="dropdown-item"
              value="India"
              onClick={(e) => this.upco(e.target.value)}
            >
              IND
            </button>
            <button
              className="dropdown-item"
              value="England"
              onClick={(e) => this.upco(e.target.value)}
            >
              ENG
            </button>
            <button
              className="dropdown-item"
              value="Nepal"
              onClick={(e) => this.upco(e.target.value)}
            >
              NEP
            </button>
            <button
              className="dropdown-item"
              value="USA"
              onClick={(e) => this.upco(e.target.value)}
            >
              USA
            </button>
            <button
              className="dropdown-item"
              value="Australia"
              onClick={(e) => this.upco(e.target.value)}
            >
              AUS
            </button>
          </div>
        </div>
        {this.state.showAustralia ? <Australia /> : null}
        {this.state.showEngland ? <England /> : null}
        {this.state.showIndia ? <India /> : null}
        {this.state.showNepal ? <Nepal /> : null}
        {this.state.showUSA ? <USA /> : null}
      </div>
    );
  }
}

export default Country;
