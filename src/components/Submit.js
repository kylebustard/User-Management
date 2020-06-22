import React from "react";

const Submit = ({ submitHandler }) => (
  <button
    type="submit"
    onSubmit={(event) => {
      submitHandler(event);
    }}
  >
    Submit
  </button>
);

export default Submit;
