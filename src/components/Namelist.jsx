import React, { Component } from "react";

class Namelist extends Component {
  render() {
    const mylist = ["name1", "name2", "name3", "name4", "name5", "name6"];
    const listItems = mylist.map((mylist) => {
      return <li>{mylist}</li>;
    });

    return <ul>{listItems}</ul>;
  }
}

export default Namelist;
