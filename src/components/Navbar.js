import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link className="navbar-link" to="/">
          <img className="logo" src={logo} alt="logo"></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse center" id="navbarNav">
          <ul className="navbar-nav">
            <Link className="nav-item nav-li" to="/category/1">
              <li>Cajas Temáticas</li>
            </Link>
            <Link className="nav-item nav-li" to="/category/2">
              <li>Cajas Deluxe</li>
            </Link>
            <Link className="nav-item nav-li" to="/category/3">
              <li>Cajas Mensuales</li>
            </Link>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
