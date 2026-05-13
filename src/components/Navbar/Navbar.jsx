import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";
import logoImg from "../../assets/icons/logo.png";

function Navbar() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleShopClick = () => {
    if (location.pathname === "/") {
      // already on home page, just scroll
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    } else {
      // navigate to home first, then scroll
      navigate("/");
      setTimeout(() => {
        document.getElementById("products").scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="navbar-container">
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logoImg} alt="Bloom Logo" className="logo-img" />
        BLOOM
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><span onClick={handleShopClick} style={{ cursor: "pointer" }}>Shop</span></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>

      <div className="nav-right">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search flower" className="search-input" />
        </div>

        <span className="icon cart-icon" onClick={() => navigate("/cart")}>
          🛒
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </span>
        <span className="icon">👤</span>
      </div>
    </nav>
  );
}

export default Navbar;