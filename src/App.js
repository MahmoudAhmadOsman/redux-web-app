import React from "react";

import "./App.css";
import Home from "./components/pages/Home";

class App extends React.Component {
  //Send Array of items to the Home.js component using state
  //Then, use map() function to loop thorugh these items
  state = {
    items: [
      {
        id: 1,
        name: "Mahmoud Osman",
        occupation: "Software Engineer",
      },
      {
        id: 2,
        school: "Champlain College",
        major: "Computer Science",
      },
      {
        id: 3,
        school: "CCV",
        major: "Computer Science",
      },
    ],
  };

  render() {
    return (
      <div className="app">
        {/* <Home name="Mahmoud" occupation="Software Engineer" /> */}
        <Home items={this.state.items} />
      </div>
    );
  }
}

export default App;
