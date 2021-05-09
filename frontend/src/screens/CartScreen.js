import "./CartScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Components
import CartItem from "../components/CartItem";

// Actions
import { removeFromCart } from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const clearCart = () => {
    cartItems.map((item) => removeHandler(item.product))
  }

  const getCartCount = () => {
    return cartItems.reduce((qty) => 1 + qty, 0);
  };

  const getCartSubtotal = () => {
    return cartItems.reduce((price, item) => item.price + price, 0);
  };

  return (
    <div className="cartscreen">
      <div className="cartscreen__left">
        <h2>Shopping cart</h2>

        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Go back</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              removeHandler={removeHandler}
            />
          ))
        )}
      </div>
      <div className="cartscreen__right">
        <div className="cartscreen_info">
          <p>Subtotal ({getCartCount()}) </p>
          <p>
            {getCartSubtotal()} <i className="fas fa-brain"></i>
          </p>
        </div>
        <div>
          <button className="cancell__button" onClick={clearCart}>Cancell</button>
        </div>
      </div>
    </div>
  );
};

export default CartScreen;
