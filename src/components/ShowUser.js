import React, { Component } from "react";
import axios from "axios";
import "./ShowUser.css";

class ShowUser extends Component {
  state = {
    loadedUser: null,
  };

  async componentDidUpdate() {console.log('updated!')
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
    console.log(this.props.id);
    let user = <h1>Please select a User</h1>;
    if (this.props.id) {
      user = <h1>Loading...</h1>;
    }
    if (this.state.loadedUser) {
      user = (
        <div className="ShowUser">
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

    return <div className="ShowUser">{user}</div>;
  }
}

export default ShowUser;
