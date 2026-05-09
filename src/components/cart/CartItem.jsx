function CartItem(props) {
  return (
    <div className="cart-item">

      <img
        src={props.image}
        alt={props.name}
        width="150"
      />

      <div>
        <h2>{props.name}</h2>

        <p>${props.price}</p>

        <div className="quantity-controls">

          <button
            onClick={() => props.onDecrease(props.id)}
          >
            -
          </button>

          <span>{props.quantity}</span>

          <button
            onClick={() => props.onIncrease(props.id)}
          >
            +
          </button>

        </div>

        <button
          className="remove-btn"
          onClick={() => props.onRemove(props.id)}
        >
          Remove
        </button>

      </div>

    </div>
  );
}

export default CartItem;