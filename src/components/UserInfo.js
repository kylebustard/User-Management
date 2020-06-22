import React from "react";
import "../styles.css";
import Submit from "./Submit";
import Edit from "./Edit";

class ShowUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
    };
  }

  editHandler = () => {
    this.setState({ editMode: true });
    console.log("edit");
  };

  render() {
    const { name, email, submitHandler } = this.props;

    return (
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
          {this.state.editMode ? (
            <Submit submitHandler={submitHandler} />
          ) : (
            <Edit editHandler={this.editHandler} />
          )}
        </div>
      </div>
    );
  }
}

export default ShowUser;
