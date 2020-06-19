import React from "react";

const UserRow = ({ email, name, id, selectUserHandler }) => (
  <tr onClick={() => selectUserHandler(id)}>
    <td>{name}</td>
    <td>{email}</td>
  </tr>
);

export default UserRow;
