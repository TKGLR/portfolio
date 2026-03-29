import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
      <Link className="navbar-brand text-white" to="/">
        JOHN DOE
      </Link>

        <div>
          <NavLink className="text-white me-3" to="/">HOME</NavLink>
          <NavLink className="text-white me-3" to="/services">SERVICES</NavLink>
          <NavLink className="text-white me-3" to="/portfolio">PORTFOLIO</NavLink>
          <NavLink className="text-white me-3" to="/contact">CONTACT</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;