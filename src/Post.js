import React, { Component } from "react";

export default class Post extends Component {
  constructor(props) {
    super(props);

    this.handleSelectFav = this.handleSelectFav.bind(this);
  }
  handleSelectFav() {
    this.props.selectFav(this.props.title);
  }
  render() {
    return (
      <div>
        <h4 className="title"> {this.props.title} </h4>
        <p className="body"> {this.props.body} </p>
        <button onClick={this.handleSelectFav}>fav this post </button>
      </div>
    );
  }
}
