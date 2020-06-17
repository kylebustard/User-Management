import React from "react";

const UserRow = ({ email, name, clicked, id }) => (
  <tr>
    <td onClick={() => clicked(id)}>{name}</td>
    <td>{email}</td>
  </tr>
);

export default UserRow;
