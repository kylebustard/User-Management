import React, { Component } from "react";
import axios from "axios";
import "./FullUser.css";

class FullUser extends Component {
  state = {
    loadedUser: null,
  };

  async componentDidUpdate() {
    if (this.props.id) {
      if (
        !this.state.loadedUser ||
        (this.state.loadedUser && this.state.loadedUser.id !== this.props.id)
      ) {
        const response = await axios.get("/users/" + this.props.id);

        this.setState({ loadedUser: response.data });
      }
    }
  }

  deleteUserHandler = async () => {
    const response = await axios.delete("/users/" + this.props.id);

    console.log(response);
  };

  render() {
    let user = <p style={{ textAlign: "center" }}>Please select a User!</p>;
    if (this.props.id) {
      user = <p style={{ textAlign: "center" }}>Loading...!</p>;
    }
    if (this.state.loadedUser) {
      user = (
        <div className="FullUser">
          <h1>{this.state.loadedUser.title}</h1>
          <p>{this.state.loadedUser.content}</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deleteUserHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return user;
  }
}

export default FullUser;
