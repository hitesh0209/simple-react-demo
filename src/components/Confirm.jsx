import React, { Component } from "react";

class Confirm extends Component {
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
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;
    return (
      <React.Fragment>
        <form>
          <div className="form-group col-md-3">
            <h2>Confirm User Data</h2>
            <div>
              <hr />
              <label>FirstName</label> <br />
              <label>
                {" "}
                {"-->"} {firstName}
              </label>
              <hr />
              <label>LastName</label> <br />
              <label>
                {"-->"}
                {lastName}
              </label>
              <hr />
              <label>Email</label> <br />
              <label>
                {"-->"}
                {email}
              </label>
              <hr />
              <label>Occupation</label> <br />
              <label>
                {"-->"}
                {occupation}
              </label>
              <hr />
              <label>City</label> <br />
              <label>
                {"-->"}
                {city}
              </label>
              <hr />
              <label>Bio</label> <br />
              <label>
                {"-->"}
                {bio}
              </label>
              <hr />
            </div>
            <br />
            <button className="btn btn-success" onClick={this.continue}>
              Countinue
            </button>
            <button className="btn btn-danger" onClick={this.back}>
              Back
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default Confirm;
