import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { removeFromCart } from '../redux/actions';
import { Link } from 'react-router-dom';


const Cart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 && <p>Your cart is empty. <Link to="/menu">Order now!</Link></p>}
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.name} />
          <p>{item.name} x {item.quantity}</p>
          <p>₹{item.price * item.quantity}</p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
      {cartItems.length > 0 && <h2>Total: ₹{total}</h2>}
      {cartItems.length > 0 && <Link to="/checkout"><button className="checkout-btn">Checkout</button></Link>}
    </div>
  );
};

export default Cart;