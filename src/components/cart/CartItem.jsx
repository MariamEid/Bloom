import { useNavigate } from "react-router-dom";

function CartItem(props) {
  const navigate = useNavigate();

  return (
    <div className="cart-item">

      <img
        src={props.image}
        alt={props.name}
        width="150"
        onClick={() => navigate(`/product/${props.id}`)}
        style={{ cursor: "pointer" }} //inline style to show pointer cursor on hover, indicating it's clickable
      />

      <div className="cart-details">

        <h2
          onClick={() => navigate(`/product/${props.id}`)}
          style={{ cursor: "pointer" }}
        >
          {props.name}
        </h2>

        <p>${props.price}</p>

        <div className="cart-actions">

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

    </div>
  );
}

export default CartItem;