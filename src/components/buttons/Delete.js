import React from "react";

const Delete = ({ deleteHandler, id }) => (
  <button className="Delete" onClick={() => deleteHandler(id)}>
    <span>DELETE</span>
  </button>
);

export default Delete;
