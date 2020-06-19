import React from "react";
import axios from "axios";
import "./UsersManagement.css";
import { Router, navigate } from "@reach/router";
import ShowUsers from "../components/ShowUsers";
import ShowUser from "../components/ShowUser";
import NewUser from "../components/NewUser";
import Prompt from "../components/Prompt";
import NavLink from "../components/NavLink";
import NotFound from "../components/NotFound";

class UsersManagement extends React.Component {
  state = {
    users: [],
    error: false,
    selectedUserId: null,
  };

  async componentDidMount() {
    try {
      const response = await axios.get("/users");
      const users = response.data;
      this.setState({ users });
    } catch (error) {
      this.setState ({ error: true })
    }
  }

  selectUserHandler = (id) => {
    this.setState({ selectedUserId: id });
    navigate(`/users/${id}`);
  };

  render() {
    return (
      <div className="UsersManagement">
        <nav>
          <NavLink to="/" className="Link">
            Welcome
          </NavLink>
          <NavLink to="/users" className="Link">
            Show Users
          </NavLink>
          <NavLink to="/users/new" className="Link">
            Create New User
          </NavLink>
          <NavLink to={"/users/" + this.state.selectedUserId}>
            Show User
          </NavLink>
        </nav>

        <Router>
          <Prompt path="/" />
          <ShowUsers
            path="/users"
            error={this.state.error}
            users={this.state.users}
            selectUserHandler={this.selectUserHandler}
          />
          <NewUser path="/users/new" />
          <ShowUser path="/users/:id" users={this.state.users} />
          <NotFound default />
        </Router>
      </div>
    );
  }
}

export default UsersManagement;
