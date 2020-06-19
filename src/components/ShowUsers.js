import React from "react";
import UserRow from "./UserRow";
import "./ShowUsers.css";
import ErrorMessage from "./ErrorMessage";

const ShowUsers = (props) => {
  const { error, users, selectUserHandler } = props;

  if (error) return <ErrorMessage />;

  const userRows = users.map((user) => (
    <UserRow
      key={user.id}
      name={user.name}
      email={user.email}
      id={user.id}
      selectUserHandler={selectUserHandler}
    />
  ));

  return (
    <div className="ShowUsers">
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

export default ShowUsers;
