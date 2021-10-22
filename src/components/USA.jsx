import React, { Component } from "react";

class USA extends Component {
  constructor() {
    super();
    this.state = {
      name: "USA",
    };
  }

  render() {
    return (
      <div>
        <p>
          The United States of America (U.S.A. or USA), commonly known as the
          United States (U.S. or US) or America, is a country primarily located
          in North America. It consists of 50 states, a federal district, five
          major unincorporated territories, 326 Indian reservations, and some
          minor possessions.[g] At 3.8 million square miles (9.8 million square
          kilometers), it is the world's third- or fourth-largest country by
          total area. [c] It borders Canada to the north and Mexico to the
          south, as well as Russia across the narrow sea border of the Bering
          Strait. With a population of more than 333 million people, it is the
          third most populous country in the world. The national capital is
          Washington, D.C., and the most populous city is New York City.
        </p>
      </div>
    );
  }
}

export default USA;
