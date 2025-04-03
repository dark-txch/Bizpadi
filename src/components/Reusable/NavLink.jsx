import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, children }) => <Link to={to}>{children}</Link>;

export default NavLink;
