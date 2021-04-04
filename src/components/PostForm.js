import React, { Component } from "react";
import PropTypes from "prop-types";
import { createPost } from "../actions/clientActions";
import { connect } from "react-redux";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body,
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-danger">Add Post</h1> <hr/>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Title </label>
                <br />
                <input
                  type="text"
                  name="title"
                  onChange={this.onChange}
                  value={this.state.title}
                  className="form-control"
                  placeholder="Enter post title"
                  required
                />
              </div>
              <br />
              <div>
                <label>Body </label>
                <br />
                <textarea
                  name="body"
                  onChange={this.onChange}
                  value={this.state.body}
                  className="form-control"
                  placeholder="Enter post body"
                  rows="10"
                  cols="10"
                  required
                />
              </div>
              <br />
              <button type="submit" className="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default connect(null, { createPost })(PostForm);
