import React from "react";
import { Link } from "@reach/router";

const NavLink = (props) => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      return {
        style: {
          color: isCurrent ? "red" : "blue",
        },
      };
    }}
  />
);

export default NavLink;
