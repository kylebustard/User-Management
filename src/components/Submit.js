import React from "react";

const Submit = ({ submitHandler }) => (
  <button
    type="submit"
    className="Submit"
    onSubmit={(event) => {
      submitHandler(event);
    }}
  >
    SUBMIT
  </button>
);

export default Submit;
