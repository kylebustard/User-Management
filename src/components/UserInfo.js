import React from "react";
import "../styles.css";
import Form from "./Form";
import Edit from "./Edit";
import Delete from "./Delete";
import axios from "axios";
import SuccessMessage from "./SuccessMessage";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      isDeleted: false,
    };
  }

  activeEditMode = () => {
    this.setState({ editMode: true });
  };

  deleteHandler = async (id) => {
    try {
      await axios.delete(`/users/${id}`);
      this.setState({ isDeleted: true });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { id, name, email } = this.props;

    const user = { id, name, email };

    return this.state.isDeleted ? (
      <SuccessMessage httpMethod={"DELETE"} />
    ) : this.state.editMode ? (
      <Form user={user} httpMethod={"PATCH"} />
    ) : (
      <div className="Users">
        <h1>User</h1>
        <div className="card">
          <label>Name: </label>
          <span>{name}</span>
          <br />
          <br />
          <label>Email: </label>
          <span>{email}</span>
          <br />
          <br />
          <Edit activeEditMode={this.activeEditMode} />
          <Delete deleteHandler={this.deleteHandler} id={id} />
        </div>
      </div>
    );
  }
}

export default UserInfo;
