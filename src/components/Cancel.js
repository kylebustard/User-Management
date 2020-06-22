import React from "react";
import { navigate } from "@reach/router";

const Cancel = () => (
  <button className="Cancel" onClick={() => navigate("/")}>
    CANCEL
  </button>
);

export default Cancel;
