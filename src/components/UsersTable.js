import React from "react";
import UserRow from "./UserRow";

const UsersTable = ({ users, userSelectedHandler }) => {
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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>{userRows}</tbody>
    </table>
  );
};

export default UsersTable;
