import React from "react";
import axios from "axios";
import "./../styles.css";
import { Router, navigate } from "@reach/router";
import ShowUsers from "../components/ShowUsers";
import ShowUser from "../components/ShowUser";
import NewUser from "../components/NewUser";
import WelcomePrompt from "../components/WelcomePrompt";
import NavLink from "../components/NavLink";
import NotFound from "../components/NotFound";

class UsersManagement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: false,
      selectedUserId: null,
    };
  }

  async componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    try {
      const response = await axios.get("/users");
      const users = response.data;
      this.setState({ users });
    } catch (error) {
      this.setState({ error: true });
    }
  };

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
        </nav>

        <Router>
          <WelcomePrompt path="/" />
          <ShowUsers
            path="/users"
            error={this.state.error}
            users={this.state.users}
            selectUserHandler={this.selectUserHandler}
          />
          <NewUser path="/users/new" usersCount={this.state.users.length} />
          <ShowUser path="/users/:id" users={this.state.users} />
          <NotFound default />
        </Router>
      </div>
    );
  }
}

export default UsersManagement;
