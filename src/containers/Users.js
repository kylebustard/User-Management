import React from "react";
import User from "../components/User";
import FullUser from "../components/FullUser";
import NewUser from "../components/NewUser";
import ErrorMessage from "../components/ErrorMessage";
import axios from "axios";

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
    const users = this.state.users.map((user) => (
      <User
        key={user.id}
        name={user.name}
        email={user.email}
        clicked={() => this.userSelectedHandler(user.id)}
      />
    ));

    return (
      <div>
        <section className="Users">
          {!this.state.error ? users : <ErrorMessage />}
        </section>
        <section>
          <FullUser id={this.state.selectedUserId} />
        </section>
        <section>
          <NewUser />
        </section>
      </div>
    );
  }
}

export default Users;
