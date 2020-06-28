import React from "react";
import "../../styles.css";
import Error from "../Error";
import Table from "./Table";

class ShowUsers extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { error, users, selectUserHandler } = this.props;
    const tableHeaders = ["Name", "Email"];

    return error ? (
      <Error />
    ) : (
      <div className="Users">
        <h1>Select a user</h1>
        <Table
          tableHeaders={tableHeaders}
          results={users}
          clickHandler={selectUserHandler}
        />
      </div>
    );
  }
}

export default ShowUsers;
