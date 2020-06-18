import React from "react";
import UserRow from "./UserRow";
import ErrorMessage from "./ErrorMessage";
import "./UsersTable.css"

const UsersTable = ({ error, users, userSelectedHandler }) => {
  if (error) return <ErrorMessage />;

  const userRows = users.map((user) => (
    <UserRow
      key={user.id}
      name={user.name}
      email={user.email}
      clicked={userSelectedHandler}
      id={user.id}
    />
  ));

  return (
    <div className="UsersTable">
      <h1>Users</h1>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{userRows}</tbody>
    </table>
    </div>
  );
};

export default UsersTable;
