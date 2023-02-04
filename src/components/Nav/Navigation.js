import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./Navigation.css";

const Navigation = (props) => {
  return (
    <>
      <header className="main-header">
        <nav>
          <ul>
            <li>
              <NavLink to="/">All Products</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorites</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Navigation;
