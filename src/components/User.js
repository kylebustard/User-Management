import React from "react";

const User = ({ clicked, email, name }) => (
  <div className="User" onClick={clicked}>
    <h1>{name}</h1>
    <div className="Info">
      <div className="Email">{email}</div>
    </div>
  </div>
);

export default User;
