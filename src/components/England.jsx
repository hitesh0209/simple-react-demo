import React, { Component } from "react";

class England extends Component {
  constructor() {
    super();
    this.state = {
      name: "England",
    };
  }
  render() {
    return (
      <div>
        <p>
          England is a country that is part of the United Kingdom. It shares
          land borders with Wales to its west and Scotland to its north. The
          Irish Sea lies northwest of England and the Celtic Sea to the
          southwest. England is separated from continental Europe by the North
          Sea to the east and the English Channel to the south.
        </p>
      </div>
    );
  }
}

export default England;
