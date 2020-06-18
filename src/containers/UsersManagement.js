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
    selectedUserId: null,
    error: false,
  };

  async componentDidMount() {console.log("UsersManagement - Component Did Mount!")
    try {
      const response = await axios.get("/users");
      const users = response.data;
      this.setState({ users });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  userSelectedHandler = (id) => {
    this.setState({ selectedUserId: id });
    navigate(`/users/${id}`);
  };

  render() {console.log("UsersManagement - Rendered!")
    return (
      <div className="UsersManagement">
        <nav>
          <Link to="/users" className="Link">
            Show Users
          </Link>
          <Link to="/users/new" className="Link">
            Create New User
          </Link>
          <Link to="/users/:userId" style={{visibility: "hidden"}} />
        </nav>

        <Router>
          <UsersTable
            path="/users"
            error={this.state.error}
            users={this.state.users}
            userSelectedHandler={this.userSelectedHandler}
          />
          <NewUser path="/users/new" />
        </Router>
        <ShowUser path="/user/:userId" id={this.state.selectedUserId} />
      </div>
    );
  }
}

export default UsersManagement;
