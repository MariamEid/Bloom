import { useState } from "react";
import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/cart/OrderSummary";
import cartData from "../constants/cartData";
import "../styles/cart.css";

function Cart() {
  const [cartItems, setCartItems] = useState(cartData);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = cartItems.length === 0 ? 0 : 9.99;
  const tax = subtotal * 0.1;
  const finalTotal = subtotal + shipping + tax;

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                onIncrease={increaseQuantity}
                onDecrease={decreaseQuantity}
                onRemove={removeItem}
              />
            ))
          )}
        </div>

        <div className="summary-section">
          <OrderSummary
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            finalTotal={finalTotal}
          />
        </div>
      </div>
    </div>
  );
}

export default Cart;