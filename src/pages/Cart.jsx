import CartItem from "../components/cart/CartItem";
import OrderSummary from "../components/cart/OrderSummary";

function Cart() {
  return (
    <div>
      <h1>Shopping Cart</h1>

      <CartItem />
      <CartItem />
      <CartItem />

      <OrderSummary />
    </div>
  );
}

export default Cart;