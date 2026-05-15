import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import CategoryBadge from "../components/CategoryBadge";
import BackButton from "../components/BackButton";

const ProductDetails = () => { 
  // gets the product id from the URL and finds the corresponding product from the data
  const { id } = useParams();
  // function from CartContext used to add products to the cart
  const { addToCart } = useCart();
  // used to move user to another page (example: /cart)
  const navigate = useNavigate();

  // stores the product we find from the list of products, loading state, quantity selected by user, and whether the product was added to cart
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  // runs when the page loads or when the id in the URL changes
  useEffect(() => {
    const found = products.find(p => p.id === Number(id));
    setProduct(found);
    setLoading(false);
  }, [id]);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => { if (quantity > 1) setQuantity(quantity - 1); };   // decreases quantity by 1 but never goes below 1

  // ...product copies all product data (name, price, image etc.)
  // quantity adds the selected quantity on top of it
  // together they send the complete product + how many to the cart
  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setAdded(true);
    setTimeout(() => {     // waits 1 second before moving user to cart page
      navigate("/cart");
    }, 1000);
  };

  // if the product is still loading, show loading message
  if (loading) {
    return <div className="product-details"><p>Loading...</p></div>;
  }

  // if product does not exist, show error message
  if (!product) {
    return <div className="product-details"><p>Product not found.</p></div>;
  }
  
  //everything on screen
  return (
    <div className="product-details">
      <div className="product-container">

        <BackButton />

        <div className="product-layout">

          {/* Left column - Image */}
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>

          {/* Right column - Product info */}
          <div className="product-info">
            <CategoryBadge category={product.category} />
            <h1 className="product-name">{product.name}</h1>
            <div className="product-price">${product.price}</div>

            <p className="product-description">{product.description}</p>

            {/* Features */}
            <div className="features-section">
              <h3>Features</h3>
              <ul className="features-list">
                {/* loops through all features and displays them */}
                {product.features.map((feature, index) => (     
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* Quantity */}
            <div className="quantity-section">
              <label>Quantity:</label>
              <div className="quantity-selector">
                <button className="quantity-minus" onClick={decrease}>−</button>
                <span className="quantity-value">{quantity}</span>
                <button className="quantity-plus" onClick={increase}>+</button>
              </div>
            </div>

            {/* Buttons */}
            <div className="action-buttons">
              <button className="add-to-cart" onClick={handleAddToCart}>
                {added ? "✓ Added to Cart!" : "🛒 Add to Cart"}
              </button>
              <button className="customize-message">Customize Message</button>
            </div>

            {/* Delivery */}
            <div className="delivery-info">
              <strong>Delivery Information</strong>
              <p>Same-day delivery available for orders placed before 2 PM</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;