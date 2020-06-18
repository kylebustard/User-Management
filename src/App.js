import React, { Component } from "react";
import Logo from "./klogo.js";
import "./App.css";
import UsersManagement from "./containers/UsersManagement";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="Header">
          <header className="Header-header">
            <Logo />
            <h1 className="Header-title">Welcome to Kyruus</h1>
          </header>
          <p className="Header-intro">Users Management</p>
        </div>
        <UsersManagement />
      </React.Fragment>
    );
  }
}

export default App;
