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
    const isActive = i === currentPage ? true : false;
    const theClass = isActive ? "PageNum-active" : "PageNum";

    return (
      <li key={i} className={theClass} onClick={() => changePage(i)}>
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
