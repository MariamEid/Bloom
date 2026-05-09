import "./Navbar.css";
import logoImg from "../../assets/icons/logo.png";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="logo">
        <img src={logoImg} alt="Bloom Logo" className="logo-img" />
         BLOOM
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="nav-right">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search flower" className="search-input" />
        </div>

        <span className="icon">🛒</span>
        <span className="icon">👤</span>
      </div>
    </nav>
  );
}

export default Navbar;