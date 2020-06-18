import React, { Component } from "react";
import axios from "axios";
import "./ShowUser.css";
import { navigate } from "@reach/router";

class ShowUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedUser: null,
    };
  }

  async componentDidUpdate() {
    console.log("ShowUser - Component Did Update! ", this.props.id, " - loaded: ", this.state.loadedUser);
    if (this.props.id) {
      if (
        !this.state.loadedUser ||
        (this.state.loadedUser && this.state.loadedUser.id !== this.props.id)
      ) {
        const response = await axios.get("/users/" + this.props.id);

        this.setState({ loadedUser: response.data });
        console.log("ShowUser - data - ", response.data);
      }
    }
  }

  deleteUserHandler = async () => {
    const response = await axios.delete("/users/" + this.props.id);

    navigate("/users");
  };

  render() {console.log("ShowUser - Rendered - props ", this.props.id)
    let user = <h1>Please select a User</h1>;
    if (this.props.id) {
      user = <h1>Loading...</h1>;
    }
    if (this.state.loadedUser) {
      user = (
        <div className="ShowUser">
          <h1>{this.state.loadedUser.name}</h1>
          <p>{this.state.loadedUser.email}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deleteUserHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }

    return <div className="ShowUser">{user}</div>;
  }
}

export default ShowUser;
