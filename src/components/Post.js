import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

import { fetchPosts } from "../actions/clientActions";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    return (
      <main className="container">
        <div className="row">
          {this.props.posts.map((post) => (
            <div className="col-md-4">
              <div className="card" key={post.id}>
                <img
                  className="card-img-top"
                  src="https://source.unsplash.com/1600x900/?book"
                  alt={post.title}
                />

                <div className="card-body">
                  <h4 className="card-title">{post.title} &nbsp; &nbsp;</h4>
                  <hr />
                  <p className="card-text">{post.body}</p>
                  <button className="btn btn-outline-primary btn-lg font-weight-bold">
                    Reade More...
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
