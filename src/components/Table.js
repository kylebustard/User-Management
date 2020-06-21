import React from "react";
import UserRow from "./UserRow";
import PaginationDropDown from "./PaginationDropDown";

const pageOptions = [5, 10, 15, 20];

// const pagination = (totalResults) => (resultsPerPage) => {}

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resultsPerPage: 10,
    };
  }

  changeHandler = (event) =>
    this.setState({ resultsPerPage: event.target.value });

  render() {
    const { tableHeaders, content, clickHandler } = this.props;

    const headerCells = tableHeaders.map((header, idx) => (
      <th key={idx}>{header}</th>
    ));

    const userRows = content.map((user) => (
      <UserRow
        key={user.id}
        name={user.name}
        email={user.email}
        id={user.id}
        selectUserHandler={clickHandler}
      />
    ));

    return (
      <React.Fragment>
        <PaginationDropDown
          resultsPerPage={this.state.resultsPerPage}
          resultsType={"users"}
          pageOptions={pageOptions}
          changeHandler={this.changeHandler}
          resultsLength={content.length}
        />
        <table>
          <thead>
            <tr>{headerCells}</tr>
          </thead>
          <tbody>{userRows}</tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Table;
