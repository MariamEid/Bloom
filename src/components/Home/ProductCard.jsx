import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

// ProductCard receives a single product object as a prop and displays it as a card
function ProductCard({ product }) {
  const { addToCart } = useCart();       // pulls addToCart from CartContext
  const navigate = useNavigate();         // lets us navigate to another page
  
  // added tracks whether the item was just added to cart
  // used to temporarily change the button text to "✓ Added!"
  const [added, setAdded] = useState(false);

  // clicking anywhere on the card navigates to the product details page
  // the URL includes the product id so ProductDetails knows which product to show
  const handleCardClick = () => {
    navigate(`/product/${product.id}`);  // goes to ProductDetails page
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // prevents card click from firing when button is clicked
    addToCart(product); // adds this product to the global cart via CartContext
    setAdded(true); // triggers the button text change
  };

  // useEffect runs whenever "added" changes
  // when added becomes true, a 3 second timer starts
  // after 3 seconds, added is set back to false and the button returns to normal
  useEffect(() => {
    if (added) {
      const timer = setTimeout(() => setAdded(false), 3000);
      return () => clearTimeout(timer); // cleanup: cancels timer if component unmounts
    }
  }, [added]);

  return (
    // alignSelf: "start" is inline styling - prevents card from stretching to match tallest card in the row
    <div className="product-card" style={{ alignSelf: "start" }} onClick={handleCardClick}>
      {/* product image - object-fit cover in CSS crops it to fit without stretching */}
      <img src={product.image} alt={product.name} className="product-img" />

      <div className="product-info">
        {/* category label - e.g. Love, Birthday, Apology */}
        <span className="product-category">{product.category}</span>

        {/* product name */}
        <h3 className="product-name">{product.name}</h3>

        {/* product price */}
        <p className="product-price">${product.price}</p>

        {/* button text switches to "✓ Added!" for 3 seconds after clicking, then resets */}
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          {added ? "✓ Added!" : "🛒 Add to cart"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;