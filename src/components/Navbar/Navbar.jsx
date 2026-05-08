import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="logo">
        🌼 BLOOM
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Shop</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="nav-right">
        <input
          type="text"
          placeholder="Search flower"
          className="search-input"
        />

        <span className="icon">🛒</span>
        <span className="icon">👤</span>
      </div>
    </nav>
  );
}

export default Navbar;