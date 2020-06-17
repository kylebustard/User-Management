import React from "react";
import FullUser from "../components/FullUser";
import NewUser from "../components/NewUser";
import ErrorMessage from "../components/ErrorMessage";
import axios from "axios";
import UsersTable from "../components/UsersTable";

class Users extends React.Component {
  state = {
    users: [],
    selectedUserId: null,
    error: false,
  };

  async componentDidMount() {
    try {
      const response = await axios.get("/users");
      const users = response.data.slice(0, 4);
      this.setState({ users });
    } catch (error) {
      this.setState({ error: true });
    }
  }

  userSelectedHandler = (id) => this.setState({ selectedUserId: id });

  render() {
    return (
      <React.Fragment>
        {!this.state.error ? (
          <UsersTable
            users={this.state.users}
            userSelectedHandler={this.userSelectedHandler}
          />
        ) : (
          <ErrorMessage />
        )}

        <section className="Users">
          <FullUser id={this.state.selectedUserId} />
        </section>
        <section>
          <NewUser />
        </section>
      </React.Fragment>
    );
  }
}

export default Users;
