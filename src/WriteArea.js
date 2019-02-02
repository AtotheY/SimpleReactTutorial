import React, { Component } from "react";

export default class WriteArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: ""
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleBodyChange(event) {
    this.setState({
      body: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form>
          <p>Title</p>
          <input value={this.state.title} onChange={this.handleTitleChange} />
          <br />
          <p>Body</p>
          <textarea value={this.state.body} onChange={this.handleBodyChange} />
        </form>
        <button> Submit </button>
      </div>
    );
  }
}
