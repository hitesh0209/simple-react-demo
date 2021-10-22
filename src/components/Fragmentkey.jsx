import React, { Component } from "react";

class Fragmentkey extends Component {
  render() {
    const preload = {
      data: [
        {
          name: "Reactjs",
          description: "A JavaScript library for building user interfaces",
        },
        {
          name: "Vuejs",
          description: "The Progressive JavaScript Framework",
        },
        {
          name: "Emberjs",
          description:
            "Ember.js is an open-source JavaScript web framework, based on the Model–view–viewmodel pattern",
        },
      ],
    };

    const Frameworks = (props) => {
      return (
        <React.Fragment>
          {props.items.data.map((item) => (
            <>
              <React.Fragment key={item.id}>
                <h2>{item.name}</h2>
                <p>{item.url}</p>
                <p>{item.description}</p>
              </React.Fragment>
            </>
          ))}
        </React.Fragment>
      );
    };

    return <Frameworks items={preload} />;
  }
}

export default Fragmentkey;
