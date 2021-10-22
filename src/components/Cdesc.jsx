import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

var countries = [
  {
    country: "England",
    desc: "England is a country that is part of the United Kingdom.",
  },
  {
    country: "India",
    desc: "One of the oldest civilisations in the world,India is a mosaic of multicultural experiences.",
  },
  {
    country: "Australia",
    desc: "Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands",
  },
];

var buttonStyle = {
  margin: "10px 10px 10px 0",
};
var result = [];

class Cdesc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries,
      result,
      res: "",
      res2: "",
      show: false,
      // isOpen: false,
    };
  }

  handleClose = () => {
    console.log("close");
    this.setState({
      show: false,
    });
    console.log(this.state);
  };
  
  handleShow = () => {
    console.log("open");
    this.setState({
      show: true,
    });
    console.log(this.state);
  };

  // toggleModal = () => {
  //   console.log("ss");
  //   this.setState({
  //     isOpen: !this.state.isOpen,
  //   });
  //   console.log(this.state);
  // };

  description = (button) => {
    countries.map((countries, index) => {
      if (countries.country === button) {
        result = {
          country: button,
          desc: countries.desc,
        };
      }
      console.log(result);
      return result;
    });
    if (result.country !== countries.country) {
      this.setState({
        res2: button,
        res: result.desc,
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          {this.state.countries.map((countries, index) => (
            <div style={buttonStyle}>
              <button
                key={index}
                name={countries.country}
                onClick={(e) => {
                  this.description(e.target.name, countries.desc);
                  this.handleShow();
                }}
              >
                {countries.country}
              </button>
            </div>
          ))}
          {/* <p id="res">{this.state.res}</p> */}

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                {this.state.res2} Description
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.state.res}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          {/* <button onClick={this.toggleModal}>Open the modal` </button>
          <Modal
            animation={false}
            show={this.state.isOpen}
            onClose={this.toggleModal}
          >
            `Here's some content for the modal`
            <button onClick={this.props.onClose}> Close</button>
          </Modal> */}

        </div>
      </div>
    );
  }
}

export default Cdesc;
