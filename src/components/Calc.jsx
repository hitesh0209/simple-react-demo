import React, { Component } from "react";

class Calc extends Component {
  constructor() {
    super();
    this.state = {
      result: "",
    };
  }

  Run = (button) => {
    // console.log(button);

    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    // var checkResult = ''
    // checkResult = this.state.result
    this.setState({
      // eslint-disable-next-line
      result: eval(this.state.result),
    });
    // console.log(checkResult);
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    let { result } = this.state;

    return (
      <div>
        <div className="result">
          <br />
          <p>{result}</p>
          <br />
        </div>
        <div className="button">
          <button name="C" onClick={(e) => this.Run(e.target.name)}>
            C
          </button>
          <button name="CE" onClick={(e) => this.Run(e.target.name)}>
            CE
          </button>
          <br />

          <button name="1" onClick={(e) => this.Run(e.target.name)}>
            1
          </button>
          <button name="2" onClick={(e) => this.Run(e.target.name)}>
            2
          </button>
          <button name="3" onClick={(e) => this.Run(e.target.name)}>
            3
          </button>
          <button name="+" onClick={(e) => this.Run(e.target.name)}>
            +
          </button>
          <br />

          <button name="4" onClick={(e) => this.Run(e.target.name)}>
            4
          </button>
          <button name="5" onClick={(e) => this.Run(e.target.name)}>
            5
          </button>
          <button name="6" onClick={(e) => this.Run(e.target.name)}>
            6
          </button>
          <button name="-" onClick={(e) => this.Run(e.target.name)}>
            -
          </button>
          <br />

          <button name="7" onClick={(e) => this.Run(e.target.name)}>
            7
          </button>
          <button name="8" onClick={(e) => this.Run(e.target.name)}>
            8
          </button>
          <button name="9" onClick={(e) => this.Run(e.target.name)}>
            9
          </button>
          <button name="*" onClick={(e) => this.Run(e.target.name)}>
            x
          </button>
          <br />

          <button name="." onClick={(e) => this.Run(e.target.name)}>
            .
          </button>
          <button name="0" onClick={(e) => this.Run(e.target.name)}>
            0
          </button>
          <button name="=" onClick={(e) => this.Run(e.target.name)}>
            =
          </button>
          <button name="/" onClick={(e) => this.Run(e.target.name)}>
            ÷
          </button>
          <br />
        </div>
      </div>
    );
  }
}

export default Calc;
