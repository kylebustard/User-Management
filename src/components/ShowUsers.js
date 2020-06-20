import React from "react";
import UserRow from "./UserRow";
import "../styles.css";
import Error from "./Error";

const ShowUsers = (props) => {
  const { error, users, selectUserHandler } = props;

  if (error) return <Error />;

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
    <div className="Users">
      <h1>Select a User</h1>
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
