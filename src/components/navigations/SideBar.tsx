import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";

export const SideBar = () => {
  return (
    <nav className="nav overflow-auto">
      <img src={logo} alt="ra" />
      <ul>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "nav-active" : "")}
          >
            about
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
