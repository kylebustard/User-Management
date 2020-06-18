import React from "react";

const UserRow = ({ email, name, clicked, id }) => (
  <tr onClick={() => clicked(id)}>
    <td>{name}</td>
    <td>{email}</td>
  </tr>
);

export default UserRow;
