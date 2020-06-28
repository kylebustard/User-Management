import React from "react";
import ReturnLink from "../links/ReturnLink";

const SuccessMessage = ({ httpMethod }) => {
  const message = () => {
    switch (httpMethod) {
      case "POST":
        return "User was created!";
      case "PATCH":
        return "User was updated";
      case "DELETE":
        return "User was deleted";
    }
  };

  return (
    <div className="Users Users-success">
      <h1>{message()}</h1>
      <div className="card">
        <p>Click to return home.</p>
        <ReturnLink url={"/"} />
      </div>
    </div>
  );
};

export default SuccessMessage;
