import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
  return (
    <div className="navigation">
      <nav className="navbar  navbar-expand  bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Menubar
          </Link>
          <div>
            <ul className="navbar-nav ml-auto">
              {/* <Link className="nav-link" to="/">
                          Home
                        </Link>
                        <Link className="nav-link" to="/about">
                          About
                        </Link>
                        <Link className="nav-link" to="/contact">
                          Contact
                        </Link> */}
              <Link className="nav-link" to="/calc">
                Calculator
              </Link>
              {/* <Link className="nav-link" to="/countries">Countries</Link> */}
              <Link className="nav-link" to="/countapp">
                CountApp
              </Link>
              <Link className="nav-link" to="/chook">
                Chook
              </Link>
              <Link className="nav-link" to="/country">
                Country
              </Link>
              <Link className="nav-link" to="/namelist">
                Namelist
              </Link>
              <Link className="nav-link" to="/namekeys">
                Namekeys
              </Link>
              <Link className="nav-link" to="/fragkey">
                Fragmentkey
              </Link>
              <Link className="nav-link" to="/countryy">
                Countryy
              </Link>
              <Link className="nav-link" to="/conts">
                Conts
              </Link>
              <Link className="nav-link" to="/cdesc">
                Cdesc
              </Link>
              <Link className="nav-link" to="/userform">
                UserForm
              </Link>
              <Link className="nav-link" to="/addmore">
                Addmore
              </Link>
              <Link className="nav-link" to="/todaydate">
                Todaydate
              </Link>
              <Link className="nav-link" to="/carousel">
                Carousel
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
