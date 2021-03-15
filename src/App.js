import React from "react";
// import data from "./data.json";
import "./App.scss";
import Home from "./components/pages/Home";
import Products from "./components/Products";

class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     products: data.products,
  //     size: "",
  //     sort: "",
  //   };
  // }
  render() {
    const productTitles = "All Products"; //Pass title to Products.js as a props
    return (
      <div className="app">
        <Home />
        {/* <Products
          products={this.state.products}
          productTitles={productTitles}
        ></Products> */}
      </div>
    );
  }
}

export default App;
