import React, { Component } from "react";

class Conts extends Component {
  constructor() {
    super();

    this.AU = React.createRef();
    this.ENG = React.createRef();
    this.IND = React.createRef();
    this.NEP = React.createRef();
    this.US = React.createRef();
    this.upco = this.upco.bind(this);
  }

  upco = (button) => {
    if (button === "Australia") {
      this.AU.current.style.display = "block";
      this.ENG.current.style.display = "none";
      this.IND.current.style.display = "none";
      this.NEP.current.style.display = "none";
      this.US.current.style.display = "none";
    } else if (button === "England") {
      this.AU.current.style.display = "none";
      this.ENG.current.style.display = "block";
      this.IND.current.style.display = "none";
      this.NEP.current.style.display = "none";
      this.US.current.style.display = "none";
    } else if (button === "India") {
      this.AU.current.style.display = "none";
      this.ENG.current.style.display = "none";
      this.IND.current.style.display = "block";
      this.NEP.current.style.display = "none";
      this.US.current.style.display = "none";
    } else if (button === "Nepal") {
      this.AU.current.style.display = "none";
      this.ENG.current.style.display = "none";
      this.IND.current.style.display = "none";
      this.NEP.current.style.display = "block";
      this.US.current.style.display = "none";
    } else if (button === "USA") {
      this.AU.current.style.display = "none";
      this.ENG.current.style.display = "none";
      this.IND.current.style.display = "none";
      this.NEP.current.style.display = "none";
      this.US.current.style.display = "block";
    } else {
      this.AU.current.style.display = "none";
      this.ENG.current.style.display = "none";
      this.IND.current.style.display = "none";
      this.NEP.current.style.display = "none";
      this.US.current.style.display = "none";
    }
  };

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
        <div id="AU" ref={this.AU} style={{ display: "none" }}>
          <p>
            Australia, officially the Commonwealth of Australia, is a sovereign
            country comprising the mainland of the Australian continent, the
            island of Tasmania, and numerous smaller islands.[13] It is the
            largest country in Oceania and the world's sixth-largest country.
            Australia's population of nearly 26 million,[7] in an area of
            7,617,930 square kilometres (2,941,300 sq mi),[14] is highly
            urbanised and heavily concentrated on the eastern seaboard.[15]
            Canberra is the nation's capital, while the largest city is Sydney,
            and other major metropolitan areas are Melbourne, Brisbane, Perth,
            and Adelaide.
          </p>
        </div>
        <div id="ENG" ref={this.ENG} style={{ display: "none" }}>
          <p>
            England is a country that is part of the United Kingdom. It shares
            land borders with Wales to its west and Scotland to its north. The
            Irish Sea lies northwest of England and the Celtic Sea to the
            southwest. England is separated from continental Europe by the North
            Sea to the east and the English Channel to the south.
          </p>
        </div>
        <div id="IND" ref={this.IND} style={{ display: "none" }}>
          <p>
            One of the oldest civilisations in the world, India is a mosaic of
            multicultural experiences. With a rich heritage and myriad
            attractions,the country is among the most popular tourist
            destinations in the world. It covers an area of 32,87,263 sq.
            km,extending from the snow-covered Himalayan heights to the tropical
            rain forests of the south. As the 7th largest country in the
            world,India stands apart from the rest of Asia, marked off as it is
            by mountains and the sea,which give the country a distinct
            geographical entity. Fringed by the Great Himalayas in the north,it
            stretches southwards and at the Tropic of Cancer, tapers off into
            the Indian Ocean between the Bay of Bengal on the east and the
            Arabian Sea on the west. As you travel the expanse of the country,
            you are greeted by diverse nuances of cuisines,faiths,arts,crafts,
            history and adventure sports. India has a mesmeric conflation of the
            old and the new. As the bustling old bazaars rub shoulders with
            swanky shopping malls, and majestic monuments accompany luxurious
            heritage hotels, the quintessential traveller can get the best of
            both worlds. Head to the mountains, enjoy a beach retreat or cruise
            through the golden Thar, India has options galore for all.
          </p>
        </div>
        <div id="NEP" ref={this.NEP} style={{ display: "none" }}>
          <p>
            Nepal (English: /nɪˈpɔːl/;[20] Nepali: नेपाल [nepal]) is a
            landlocked country located in South Asia. It is mainly situated in
            the Himalayas, but also includes parts of the Indo-Gangetic Plain,
            bordering Tibet of China to the north, and India in the south, east,
            and west, while it is narrowly separated from Bangladesh by the
            Siliguri Corridor, and from Bhutan by the Indian state of Sikkim.
            Nepal has a diverse geography, including fertile plains, subalpine
            forested hills, and eight of the world's ten tallest mountains,
            including Mount Everest, the highest point on Earth. Nepal is a
            multi-ethnic, multi-lingual, multi-religious and multi-cultural
            state, with Nepali as the official language. Kathmandu is the
            nation's capital and the largest city.
          </p>
        </div>
        <div id="US" ref={this.US} style={{ display: "none" }}>
          <p>
            The United States of America (U.S.A. or USA), commonly known as the
            United States (U.S. or US) or America, is a country primarily
            located in North America. It consists of 50 states, a federal
            district, five major unincorporated territories, 326 Indian
            reservations, and some minor possessions.[g] At 3.8 million square
            miles (9.8 million square kilometers), it is the world's third- or
            fourth-largest country by total area. [c] It borders Canada to the
            north and Mexico to the south, as well as Russia across the narrow
            sea border of the Bering Strait. With a population of more than 333
            million people, it is the third most populous country in the world.
            The national capital is Washington, D.C., and the most populous city
            is New York City.
          </p>
        </div>
      </div>
    );
  }
}

export default Conts;
