import React from "react";
import { inputStatus } from "./FormConstants";

const OkOrError = ({ userInputStatus, inputType }) => {
  const errorMessage =
    inputType === "name"
      ? "You must enter a name"
      : "You must enter an email address";

  if (userInputStatus === inputStatus.OK) {
    return (
      <React.Fragment>
        <br />
        <label htmlFor={`${inputType}Success`} className="Success">
          <strong>Ok</strong>
        </label>
        <br />
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <br />
        <label htmlFor={`${inputType}Error`} className="Error">
          <strong>Error: </strong>
          {errorMessage}
        </label>
        <br />
      </React.Fragment>
    );
  }
};

export default OkOrError;
