import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Calc,
  Contact,
  Navigation,
  Namelist,
  Namekeys,
  Fragmenykey,
  Result,
  CountApp,
  Chook,
  Country,
  Countryy,
  Conts,
  Cdesc,
  UserForm,
  Addmore,
  Todaydate,
  Carousel
} from "./components/index";

const SliderData = [
  {
    image:
      'http://127.0.0.1:8887/a.jpg'
  },
  {
    image:
      'http://127.0.0.1:8887/b.jpg'
  },
  {
    image:
      'http://127.0.0.1:8887/c.jpg'
  },
  {
    image:
      'http://127.0.0.1:8887/d.jpg'
  },
  {
    image:
      'http://127.0.0.1:8887/e.jpg'
  }
];


class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Router>
            <Navigation />
            <Switch>
              {/* <Route path="/" exact component={() => <Home/>}/>
                        <Route path="/about" exact component={() => <About/>}/>
                        <Route path="/contact" exact component={() => <Contact/>}/> */}
              <Route
                path="/calc"
                exact
                component={() => (
                  <Calc result={this.result} onClick={this.Run} />
                )}
              />
              <Route path="/contact" exact component={() => <Contact />} />
              {/* eslint-disable-next-line */}
              {/* <Route path="/countries" exact component={ () => <Countries></Countries> }/> */}
              <Route path="/countapp" exact component={() => <CountApp />} />
              <Route path="/chook" exact component={() => <Chook />} />
              <Route path="/country" exact component={() => <Country />} />
              <Route path="/namelist" exact component={() => <Namelist />} />
              <Route path="/namekeys" exact component={() => <Namekeys />} />
              <Route path="/fragkey" exact component={() => <Fragmenykey />} />
              <Route path="/countryy" exact component={() => <Countryy />} />
              <Route path="/conts" exact component={() => <Conts />} />
              <Route path="/cdesc" exact component={() => <Cdesc />} />
              <Route path="/userform" exact component={() => <UserForm />} />
              <Route path="/addmore" exact component={() => <Addmore />} />
              <Route path="/todaydate" exact component={() => <Todaydate />} />
              <Route path="/carousel" exact component={() => <Carousel slides={SliderData} />} />
            </Switch>
          </Router>
        </div>
        <Result />
        {/* <div id="in" style = {{display : "none"}}>
                <India />
                </div>
                <div id="en"  style = {{display : "none"}} >
                <England />
                </div>
                <div id="ne"  style = {{display : "none"}} >
                <Nepal />
                </div>
                <div id="us"  style = {{display : "none"}} >
                <USA />
                </div>
                <div id="au"  style = {{display : "none"}} >
                <Australia />
                </div> */}
      </div>
    );
  }
}

export default App;
