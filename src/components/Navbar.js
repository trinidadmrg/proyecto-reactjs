import "bootstrap/dist/css/bootstrap.min.css";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <a className="navbar-link" href="#">
          Medusa Box
        </a>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-li" aria-current="page" href="#">
                Cajas Mensuales
              </a>
            </li>
            <li>
              <a className="nav-li" href="#">
                Cajas Temáticas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-li" href="#">
                Cajas Deluxe
              </a>
            </li>
          </ul>
        </div>
      </div>
      <CartWidget />
    </nav>
  );
};

export default Navbar;
