import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import AppContext from "./AppContext";

class Header extends React.Component {
  static contextType = AppContext;

  render(): React.ReactNode {
    return (
      <nav className="header__container">
        <div className="header__wrapper">
          <NavLink to="/" className="header__logo">
            FE1020
          </NavLink>
        </div>
        <div className="header__wrapper">
          <NavLink to="/todo-list" className="header__button button__box button">
            Todo App
          </NavLink>
          <NavLink to="/users" className="header__button button__box button">
            User Directory
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default Header;
