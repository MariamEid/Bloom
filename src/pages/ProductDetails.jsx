import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ProductDetails.css";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import CategoryBadge from "../components/CategoryBadge";
import BackButton from "../components/BackButton";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const found = products.find(p => p.id === Number(id));
    setProduct(found);
    setLoading(false);
  }, [id]);

  const increase = () => setQuantity(quantity + 1);
  const decrease = () => { if (quantity > 1) setQuantity(quantity - 1); };

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setAdded(true);
    setTimeout(() => {
      navigate("/cart");
    }, 1000);
  };

  if (loading) {
    return <div className="product-details"><p>Loading...</p></div>;
  }

  if (!product) {
    return <div className="product-details"><p>Product not found.</p></div>;
  }

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