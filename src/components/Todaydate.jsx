import React, { Component } from "react";

const min = 0;
const max = 56;
var maxd = 31;
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var result;
var oddm = ["January", "March", "May", "July", "August", "October", "December"];

class Todaydate extends Component {
  constructor() {
    super();
    const thisYear = new Date().getFullYear();
    const thisMonth = new Date().getMonth();
    const thisDay = new Date().getDay();
    this.state = {
      thisYear: thisYear,
      selectedYear: "2021",
      thisMonth: thisMonth,
      selectedMonth: "January",
      thisDay: thisDay,
      selectedDay: "1",
    };
  }

  settoinitial = () =>{
    this.setState(prevState  => ({
      selectedYear: prevState.selectedYear,
      selectedMonth: prevState.selectedMonth,
      selectedDay: prevState.selectedDay,
    }))
  } 


  addOptionsDay = (e) => {
    e.preventDefault(); 
    // console.log(e.target.value);
    let day = e.target.value
    this.setState({ selectedDay: day });
  };

  addOptionsMonth = (e) => {    
    e.preventDefault();   
    let month = e.target.value
    this.setState({ selectedMonth: month });
    if (e.target.value === "February") {
      // console.log("28");
      maxd = 28;
      return;
    }

    if (e.target.value === oddm.find((m) => m === e.target.value)) {
      // console.log("31");
      maxd = 31;
      return;
    } else {
      // console.log("30");
      maxd = 30;
      return;
    }
  };

  addOptionsYear = (e) => {
    e.preventDefault(); 
    // console.log(e.target.value);
    let year = e.target.value
    this.setState({ selectedYear: year });
  };


  display = (e) => { 
    e.preventDefault(); 
    this.settoinitial();
    console.log(this.state.selectedDay + "-" + this.state.selectedMonth + "-" + this.state.selectedYear);
    result = <p>{this.state.selectedDay} - {this.state.selectedMonth} - {this.state.selectedYear}</p>;     
    return result;
  };


  render() {
    const { thisYear } = this.state;
    const optionMonth = [];
    const optionYear = [];
    const optionDay = [];

    for (let i = min + 1; i <= maxd; i++) {
      optionDay.push(<option value={i}>{i}</option>);
    }

    months.map((months, index) => {
      return optionMonth.push(<option key={index} value={months}>{months}</option>);
    });

    for (let i = min; i <= max; i++) {
      var year = thisYear - i;
       optionYear.push(<option value={year}>{year}</option>);
    }

    return (
      <div style={{marginLeft:"50px",marginTop : "50px"}}>
        <select value={this.selectedDay} onChange={this.addOptionsDay}>
          {optionDay}
        </select>
      
        <select value={this.selectedMonth} onChange={this.addOptionsMonth}>
          {optionMonth}
        </select>

        <select value={this.selectedYear} onChange={this.addOptionsYear}>
          {optionYear}
        </select>

        <br />
        <br />

        <button type="button" onClick={this.display}>submit</button>

        <br />
        <br />

        <p>{result}</p>
      </div>
    );
  }
}

export default Todaydate;
