import React, { Component } from "react";

export class Home extends Component {
  render() {
    //console.log(this.props);

    const items = this.props.items;
    return (
      <div>
        <h1>Home</h1>
        <hr />
        <h4>Props from App.js</h4>
        {/* Loop through items */}
        {items.map((item) => (
          <div key={item.id}>
            <p>{item.occupation}</p>
            <p>{item.school}</p>
            <p>{item.major}</p>

            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
