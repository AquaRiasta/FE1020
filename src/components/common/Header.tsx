import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import AppContext from "./AppContext";

class Header extends React.Component {
  static contextType = AppContext;

  render(): React.ReactNode {
    return (
      <nav className="navigation">
        <div className="navigation__wrapper">
          <NavLink to="/" className="navigation__logo">
            FE1020
          </NavLink>
        </div>
        <div className="navigation__wrapper">
          <NavLink to="/todo-list" className="navigation__button">
            Todo App
          </NavLink>
          <NavLink to="/users" className="navigation__button">
            User Directory
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Header;
