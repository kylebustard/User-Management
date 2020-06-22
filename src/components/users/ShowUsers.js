import React from "react";
import "../../styles.css";
import Error from "../Error";
import Table from "./Table";

const ShowUsers = (props) => {
  const { error, users, selectUserHandler } = props;

  if (error) return <Error />;

  const tableHeaders = ["Name", "Email"];

  return (
    <div className="Users">
      <h1>Select a user</h1>
      <Table
        tableHeaders={tableHeaders}
        results={users}
        clickHandler={selectUserHandler}
      />
    </div>
  );
};

export default ShowUsers;
