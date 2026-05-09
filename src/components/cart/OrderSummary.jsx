function OrderSummary(props) {
  return (
    <div className="order-summary">

      <h2>Order Summary</h2>

      <p>
        Subtotal:
        ${props.subtotal.toFixed(2)}
      </p>

      <p>
        Shipping:
        ${props.shipping.toFixed(2)}
      </p>

      <p>
        Tax:
        ${props.tax.toFixed(2)}
      </p>

      <h3>
        Total:
        ${props.finalTotal.toFixed(2)}
      </h3>

      <button>
        Proceed to Checkout
      </button>

    </div>
  );
}

export default OrderSummary;