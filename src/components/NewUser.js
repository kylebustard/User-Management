import React from "react";
import axios from "axios";
import "./NewUser.css"

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
        <h1>Create New User</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const { name, email } = event.target.elements;
            this.setState({ name: name.value, email: email.value });
          }}
        >
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
          />
          <br />
          <button onClick={this.postUserHandler}>Add User</button>
        </form>
      </div>
    );
  }
}

export default NewUser;
