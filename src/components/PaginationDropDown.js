import React from "react";

const PaginationDropDown = ({
  resultsPerPage,
  resultsType,
  pageOptions,
  changeHandler,
  numberOfResults,
}) => (
  <label htmlFor="pagination">
    Show
    <select
      id="resultsPerPage"
      value={resultsPerPage}
      onChange={changeHandler}
      onBlur={changeHandler}
      disabled={!numberOfResults}
    >
      <option>{resultsPerPage}</option>
      {pageOptions.map((pageOption) => (
        <option key={pageOption} value={pageOption}>
          {pageOption}
        </option>
      ))}
    </select>
    {resultsType}
  </label>
);

export default PaginationDropDown;
