import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/cart/OrderSummary";
import { useCart } from "../context/CartContext";
import "../styles/cart.css";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    subtotal,
    shipping,
    tax,
    finalTotal,
  } = useCart();

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