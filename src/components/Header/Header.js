import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  return (
    <div className="topnav">
      <div className="mainLogo">
        <NavLink activeClassName="active" to="/" exact>
          VIDU
        </NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/tv">TV</NavLink>
        {/* <NavLink to="/free">Free</NavLink> */}
        <NavLink to="/sign-up">Sign Up</NavLink>
      </div>
      <div className="topnav-right">
        {/* <NavLink to="/redeem">Redeem</NavLink> */}
        <NavLink to="/sign-in">Sign In</NavLink>
        {/* <NavLink to="/search">
          <SearchIcon fontSize="small" />
        </NavLink> */}
      </div>
    </div>
  );
};

export default Header;
