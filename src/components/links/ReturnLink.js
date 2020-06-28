import React from "react";
import { Link } from "@reach/router";

const ReturnLink = ({ url }) => (
  <Link to={url} className="Link">
    Return
  </Link>
);

export default ReturnLink;
