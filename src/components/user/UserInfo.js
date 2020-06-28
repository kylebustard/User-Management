import React from "react";
import "../../styles.css";
import Form from "../form/Form";
import Edit from "../buttons/Edit";
import Delete from "../buttons/Delete";
import axios from "axios";
import SuccessMessage from "../form/SuccessMessage";
import ReturnLink from "../links/ReturnLink";

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
        <div className="User-info-footer">
          <ReturnLink url={"/users"} />
        </div>
      </div>
    );
  }
}

export default UserInfo;
