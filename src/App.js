import WriteArea from "./WriteArea";
import React, { Component } from "react";
import "./App.css";
import PostArea from "./PostArea";

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>My blog app</p>
        <WriteArea />
        <PostArea />
      </div>
    );
  }
}

export default App;
