import React, { Component } from "react";

class Australia extends Component {
  constructor() {
    super();
    this.state = {
      name: "Australia",
    };
  }

  render() {
    return (
      <div>
        <p>
          Australia, officially the Commonwealth of Australia, is a sovereign
          country comprising the mainland of the Australian continent, the
          island of Tasmania, and numerous smaller islands.[13] It is the
          largest country in Oceania and the world's sixth-largest country.
          Australia's population of nearly 26 million,[7] in an area of
          7,617,930 square kilometres (2,941,300 sq mi),[14] is highly urbanised
          and heavily concentrated on the eastern seaboard.[15] Canberra is the
          nation's capital, while the largest city is Sydney, and other major
          metropolitan areas are Melbourne, Brisbane, Perth, and Adelaide.
        </p>
      </div>
    );
  }
}

export default Australia;
