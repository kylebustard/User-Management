import React from "react";
import axios from "axios";

class NewUser extends React.Component {
  state = {
    name: "",
    email: "",
  };

  postUserHandler = () => {
    const user = {
      name: this.state.name,
      email: this.state.email,
    };

    axios.post("/users", user).then((res) => console.log(res));
  };

  render() {
    return (
      <div className="NewUser">
        <h1>Add a User</h1>
        <label>Name</label>
        <input
          type="text"
          value={this.state.name}
          onChange={(event) => this.setState({ name: event.target.value })}
        />
        <label>Email</label>
        <input
          type="text"
          value={this.state.email}
          onChange={(event) => this.setState({ email: event.target.value })}
        />
        <button onClick={this.postUserHandler}>Add User</button>
      </div>
    );
  }
}

export default NewUser;
