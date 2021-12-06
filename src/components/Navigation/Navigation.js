import s from "components/Navigation/Navigation.module.css";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "redux/auth";

const setActive = ({ isActive }) => (isActive ? s.activeLink : s.link);

const Navigation = () => {
  const isAuth = useSelector(authSelectors.getAuth);
  return (
    <nav className={s.nav}>
      <NavLink to="/" exact="true" className={setActive}>
        Home Page
      </NavLink>

      {isAuth && (
        <NavLink to="/contacts" exact="true" className={setActive}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
