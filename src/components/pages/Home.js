import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";

import Navbar from "../Navbar";
import Products from "../Products";
import Landing from "../Landing";

export class Home extends Component {
  render() {
    return (
      <Router>
        <main classNameName="main-content">
          <Navbar />
          <Switch>
            <Route exact path="/" >
              <Landing />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
          </Switch>
        </main>
      </Router>
    );
  }
}

export default Home;
