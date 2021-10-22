import React, { Component } from "react";

class Addmore extends Component {

  constructor(props) {
    super(props);
    this.state = { values: [{ value: null }] };
  }

  // state = { values: [{ value: null }] };

  storeValue(i, e) {
    let values = [...this.state.values];
    values[i].value = e.target.value;
    this.setState({ values });
  }

  addField() {
    this.setState((prevState) => ({
      values: [...prevState.values, { value: null }],
    }));
  }

  removeField(i) {
    let values = [...this.state.values];
    values.splice(i, 1);
    this.setState({ values });
  }

  render() {

    return (

      <div style={{ marginLeft: "10px" }}>

        <input
          type="button"
          value="Add +"
          onClick={() => this.addField()}
          style={{ marginBottom: "10px" }}
        />

        {this.state.values.map((values, i) => (

          <div style={{ marginBottom: "10px" }} key={i}>

            <input
              type="text"
              value={values.value || ""}
              onChange={(e) => this.storeValue(i, e)}
            />

            <input
              type="button"
              value="X"
              style={{ marginLeft: "10px" }}
              onClick={() => this.removeField(i)}
            />

          </div>

        ))}

      </div>

    );

  }
}

export default Addmore;

//   createUI() {
//     return this.state.values.map((el, i) => (
//       <div key={i}>
//         <input
//           type="text"
//           value={el.value || ""}
//           onChange={this.storeValue.bind(this, i)}
//         />
//         <input
//           type="button"
//           value="remove"
//           onClick={this.removeField.bind(this, i)}
//         />
//       </div>
//     ));
//   }
