import React from "react";

const UserRow = ({ email, name, id, selectUserHandler }) => {
  return (
    <tr onClick={() => selectUserHandler(id)}>
      <td>{name}</td>
      <td>{email}</td>
    </tr>
  );
};

export default UserRow;
