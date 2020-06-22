import React from "react";
import "../styles.css";
import Form from "./Form";
import Edit from "./Edit";

class ShowUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
  }

  activeEditMode = () => {
    this.setState({ editMode: true });
    console.log("edit");
  };

  render() {
    const { id, name, email } = this.props;

    const user = { id, name, email };

    return this.state.editMode ? (
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
        </div>
      </div>
    );
  }
}

export default ShowUser;
