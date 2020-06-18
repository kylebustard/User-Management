import React from "react";
import axios from "axios";
import "./UsersManagement.css";
import { Link, Router } from "@reach/router";
import UsersTable from "../components/UsersTable";
import FullUser from "../components/FullUser";
import NewUser from "../components/NewUser";

class UsersManagement extends React.Component {
  state = {
    users: [],
    selectedUserId: null,
    error: false,
    selectedView: "SHOW_ALL_USERS",
    views: ["SHOW_ALL_USERS", "NEW_USER", "SHOW_USER", "EDIT_USER"],
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

  userSelectedHandler = (id) => this.setState({ selectedUserId: id });

  render() {
    return (
      <div className="UsersManagement">
        <nav>
          <Link to="/users">Users</Link>
          <Link to="/users/new">Create New User</Link>
          <Link to="/users/1">User 1</Link>
        </nav>

        <Router>
          <UsersTable
            path="/users"
            error={this.state.error}
            users={this.state.users}
            userSelectedHandler={this.userSelectedHandler}
          />
          <FullUser
            path="/users/1"
            selectedUserId={this.state.selectedUserId}
          />
          <NewUser path="/users/new" />
        </Router>
      </div>
    );
  }
}

export default UsersManagement;
