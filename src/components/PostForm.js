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
            <h1>Add Post</h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Title </label>
                <br />
                <input
                  type="text"
                  name="title"
                  onChange={this.onChange}
                  value={this.state.title}
                  classname="form-control"
                  placeholder="Enter post title"
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
                  classname="form-control"
                  placeholder="Enter post body"
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
