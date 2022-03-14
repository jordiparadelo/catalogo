import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_links">
        <div id="logo" to="/">
          <Logo />
        </div>

        <ul className="links">
          <li>
            <NavLink to="/" className="btn btn-primary btn-ghost">
              Showcase
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/dashboard" className="btn btn-primary btn-ghost">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/documentation" className="btn btn-primary btn-ghost">
              Documentation
            </NavLink>
          </li> */}
        </ul>
      </div>

      <div className="navbar_account">
        <NavLink to="/signin" className="btn btn-primary btn-ghost">
          Sign In
        </NavLink>
        <NavLink to="/signup" className="btn btn-primary">
          Sign Up
        </NavLink>
        {/* <button className="btn btn-primary btn-ghost" id="account-button">
          <img src="" alt="" className="avatar" />
          Account
          <svg
            className="icon"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 5.17322L8 10.8268L2 5.17322" stroke="#030303" />
          </svg>
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
