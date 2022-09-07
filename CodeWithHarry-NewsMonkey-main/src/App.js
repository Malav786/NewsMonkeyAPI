import "./App.css";

import React, { Component } from "react";

import Nav from "./components/Nav";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <News pageSize={5} />
      </div>
    );
  }
}
