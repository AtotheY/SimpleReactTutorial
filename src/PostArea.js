import axios from "axios";
import React, { Component } from "react";
import Post from "./Post";

export default class PostArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favPost: "",
      posts: [],
      endSlice: 5
    };

    this.selectFavPost = this.selectFavPost.bind(this);
    this.handleShowMore = this.handleShowMore.bind(this);
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(res => {
      this.setState({
        posts: res.data
      });
    });
  }

  selectFavPost(title) {
    this.setState({
      favPost: title
    });
  }

  handleShowMore() {
    const newEndSlice = this.state.endSlice + 5;
    this.setState({
      endSlice: newEndSlice
    });
  }

  render() {
    return (
      <div>
        <h1>Your current fav post is</h1>
        <h2>{this.state.favPost}</h2>
        <h1>Top Posts</h1>
        {this.state.posts.slice(0, this.state.endSlice).map((post, key) => (
          <Post
            key={key}
            selectFav={this.selectFavPost}
            title={post.title}
            body={post.body}
          />
        ))}
        <br />
        <button onClick={this.handleShowMore}>Show 5 more posts</button>
      </div>
    );
  }
}
