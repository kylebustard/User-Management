import React from "react";

const PaginationFooter = ({
  currentPage,
  totalPages,
  changePage,
  startIdx,
  endIdx,
  numberOfResults,
}) => {
  const pageIndexBox = new Array(totalPages).fill(null).map((_, idx) => {
    const i = idx + 1;
    return (
      <li key={i} onClick={() => changePage(i)}>
        {i}
      </li>
    );
  });

  return (
    <div className="PaginationFooter">
      <p>
        Showing {startIdx + 1} to {endIdx} of {numberOfResults} users
      </p>
      <ul>{pageIndexBox}</ul>
    </div>
  );
};

export default PaginationFooter;
