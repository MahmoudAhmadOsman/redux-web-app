import React, { Component } from "react";
import data from "./data.json";
class Products extends Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  render() {
    // console.log(this.props);
    const { products, size, sort } = this.state; // desctructuring data
    const productTitles = "All products";

    return (
      <main className="product_page">
        <div className="container">
          <h1 className="text-danger">{productTitles}</h1> <hr />
          <div className="row">
            {products.map((product) => (
              <div className="col-md-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src={product.image}
                    alt={product.title}
                    className="img-fluid"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{product.title}</h4>
                    <p className="card-text">{product.description}</p>
                    <button
                      href="#"
                      className="btn btn-outline-danger"
                      disabled
                    >
                      ${product.price}
                    </button>
                    <a href="#" className="btn btn-outline-danger ml-2">
                      ADD TO CART
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    );
  }
}
export default Products;
