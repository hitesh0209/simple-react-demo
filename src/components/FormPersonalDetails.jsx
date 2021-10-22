import React, { Component } from "react";

class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <form>
          <div className="form-group col-md-3">
            <h2>Enter Personal Details</h2>
            <br />
            <label>Occupation</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Occupation"
              onChange={handleChange("occupation")}
              defaultValue={values.occupation}
            />
            <br />
            <label>Your City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your City"
              onChange={handleChange("city")}
              defaultValue={values.city}
            />
            <br />
            <label>Bio</label>
            <input
              type="text-area"
              className="form-control"
              placeholder="Enter your Bio"
              onChange={handleChange("bio")}
              defaultValue={values.bio}
            />
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

export default FormPersonalDetails;
