import React from "react";

const PaginationDropDown = ({
  resultsPerPage,
  resultsType,
  pageOptions,
  changeResultsPerPage,
  numberOfResults,
}) => (
  <div className="PaginationDropDown">
    <label htmlFor="pagination">
      Show
      <select
        id="resultsPerPage"
        value="number"
        onChange={changeResultsPerPage}
        onBlur={changeResultsPerPage}
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
  </div>
);

export default PaginationDropDown;
