import React from "react";
import axios from "axios";
import "../styles.css";
import Error from "./Error";
import Loading from "./Loading";

class ShowUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedUser: null,
      error: false,
    };
  }

  async componentDidMount() {
    if (this.props.id) {
      if (
        !this.state.loadedUser ||
        (this.state.loadedUser && this.state.loadedUser.id !== this.props.id)
      ) {
        const { users, id } = this.props;

        if (!users.length) {
          try {
            const response = await axios.get("/users/" + id);
            const loadedUser = response.data;
            this.setState({ loadedUser });
          } catch (error) {
            this.setState({ error: true });
          }
        } else {
          const loadedUser = users.find((user) => user.id === id);
          this.setState({ loadedUser });
        }
      }
    }
  }

  render() {
    return this.state.error ? (
      <Error />
    ) : this.state.loadedUser ? (
      <div className="Users">
        <h1>User</h1>
        <div className="card">
          <p>Name: {this.state.loadedUser.name}</p>
          <p>Email: {this.state.loadedUser.email}</p>
        </div>
      </div>
    ) : (
      <Loading />
    );
  }
}

export default ShowUser;
