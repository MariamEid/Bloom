import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Navbar.css";
import logoImg from "../../assets/icons/logo.png";

function Navbar() {
  // get cartItems array from CartContext to calculate how many items are in the cart
  const { cartItems } = useCart();

  // useNavigate lets us programmatically navigate to a different page
  const navigate = useNavigate();

   // useLocation gives us the current URL path so we know which page we're on
  const location = useLocation();

    // reduce loops through all cart items and adds up their quantities
  // this gives us the total number of items to show on the cart badge
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  // this function runs when the user clicks "Shop" in the navbar
  const handleShopClick = () => {
    if (location.pathname === "/") {
      // already on home page, just scroll
      // getElementById finds the element with id="products" in ProductsSection.jsx
      document.getElementById("products").scrollIntoView({ behavior: "smooth" });
    } else {
      // navigate to home first, then scroll
      navigate("/");
      // setTimeout waits 100ms for the home page to load before scrolling
      // without this delay, the products section wouldn't exist yet when we try to scroll
      setTimeout(() => {
        document.getElementById("products").scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="navbar-container">
      {/* clicking the logo always takes the user back to the home page */}
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logoImg} alt="Bloom Logo" className="logo-img" />
        BLOOM
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        {/* Shop uses span instead of Link because it scrolls instead of navigating to a new page */}
        <li><span onClick={handleShopClick} style={{ cursor: "pointer" }}>Shop</span></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
      </ul>

      <div className="nav-right">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search flower" className="search-input" />
        </div>

        {/* cart icon - onClick navigates to the cart page */}
        <span className="icon cart-icon" onClick={() => navigate("/cart")}>
          🛒
          
          {/* badge only shows when cartCount is greater than 0 */}
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