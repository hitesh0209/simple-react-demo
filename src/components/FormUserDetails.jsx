import React, { Component } from "react";

class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <React.Fragment>
        <form>
          <div className="form-group col-md-3">
            <h2>Enter User Details</h2>
            <br />
            <label>First Name</label>
            <br />
            <input
              type="text"
              className="form-control"
              placeholder="Enter your firstname"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
            <br />
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your firstname"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
            <br />
            <label>E-mail</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              onChange={handleChange("email")}
              defaultValue={values.email}
            />
            <br />
            <button className="btn btn-success" onClick={this.continue}>
              Countinue
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default FormUserDetails;
