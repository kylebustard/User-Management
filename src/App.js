import React, { Component } from "react";
import Logo from "./klogo.js";
import "./App.css";
import Users from "./containers/Users";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Header">
          <header className="Header-header">
            <Logo />
            <h1 className="Header-title">Welcome to Kyruus</h1>
          </header>
          <p className="Header-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <Users />
      </React.Fragment>
    );
  }
}

export default App;
