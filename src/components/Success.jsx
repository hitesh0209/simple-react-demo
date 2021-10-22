import React, { Component } from "react";

class Success extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <React.Fragment>
        <form>
          <div className="form-group ">
            <label title="Success" />
            <h2>Thank You For Your Submission</h2>

            <a href="/userform">
              <button className="btn btn-primary">back to Userform</button>
            </a>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Success;
