import React from "react";
import UserRow from "./UserRow";

const PaginatedResults = ({
  currentPage,
  results,
  resultsPerPage,
  clickHandler,
}) => {
  const slicedResults = (startIdx, endIdx, results) =>
    results.slice(startIdx - 1, endIdx);

  const getSlicedResults = slicedResults(1, resultsPerPage, results);

  const userRows = getSlicedResults.map((user) => (
    <UserRow
      name={user.name}
      email={user.email}
      id={user.id}
      selectUserHandler={clickHandler}
    />
  ));
  return <tbody>{userRows}</tbody>;
};

export default PaginatedResults;
