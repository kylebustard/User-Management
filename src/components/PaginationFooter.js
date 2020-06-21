import React from "react";

const PaginationFooter = ({
  currentPage,
  resultsPerPage,
  numberOfResults,
  changePage,
}) => {
  const totalPages = Math.ceil(numberOfResults / resultsPerPage);

  const pageIndexBox = new Array(totalPages).fill(null).map((_, idx) => (
    <li key={idx + 1} onClick={() => changePage(idx + 1)}>
      {idx + 1}
    </li>
  ));

  return (
    <div className="PaginationFooter">
      <p>
        Current Page: {currentPage}. Number of results: {numberOfResults}. Total
        pages: {totalPages}
      </p>
      <ul>{pageIndexBox}</ul>
    </div>
  );
};

export default PaginationFooter;
