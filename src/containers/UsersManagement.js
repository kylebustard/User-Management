import React from "react";
import axios from "axios";
import "./UsersManagement.css";
import { Link, Router, navigate } from "@reach/router";
import UsersTable from "../components/UsersTable";
import ShowUser from "../components/ShowUser";
import NewUser from "../components/NewUser";

class UsersManagement extends React.Component {
  state = {
    users: [],
    selectedUserId: 1,
    error: false,
  };

  async componentDidMount() {
    try {
      const response = await axios.get("/users");
      const users = response.data;
      this.setState({ users });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  userSelectedHandler = (id) => {
    console.log("ID: ", id);
    this.setState({ selectedUserId: id });
    navigate(`/users/${id}`)
  }

  render() {
    return (
      <div className="UsersManagement">
        <nav>
          <Link to="/users" className="Link">
            Show Users
          </Link>
          <Link to="/users/new" className="Link">
            Create New User
          </Link>
          <Link to={`/users/${this.state.selectedUserId}`}>Show User</Link>
        </nav>

        <Router>
          <UsersTable
            path="/users"
            error={this.state.error}
            users={this.state.users}
            userSelectedHandler={this.userSelectedHandler}
          />
          <NewUser path="/users/new" />
          <ShowUser path="/user/:userId" id={this.state.selectedUserId} />
        </Router>
      </div>
    );
  }
}

export default UsersManagement;
