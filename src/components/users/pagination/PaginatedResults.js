import React from "react";
import UserRow from "../UserRow";

const PaginatedResults = ({ results, clickHandler, startIdx, endIdx }) => {
  const slicedResults = (startIdx, endIdx, results) =>
    results.slice(startIdx, endIdx);

  const getSlicedResults = slicedResults(startIdx, endIdx, results);

  const userRows = getSlicedResults.map((user) => (
    <UserRow
      key={user.id}
      name={user.name}
      email={user.email}
      id={user.id}
      selectUserHandler={clickHandler}
    />
  ));
  return <tbody>{userRows}</tbody>;
};

export default PaginatedResults;
