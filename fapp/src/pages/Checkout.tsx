
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { clearCart, addOrder } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const Checkout: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const today = new Date().toISOString();
    const orderWithDate = cartItems.map(item => ({ ...item, date: today }));

    
    dispatch(addOrder(orderWithDate));

    
    dispatch(clearCart());

    alert('Order placed successfully!');
    navigate('/'); 
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Checkout</h1>
      {cartItems.length === 0 && <p>Your cart is empty.</p>}
      {cartItems.map(item => (
        <p key={item.id}>
          {item.name} x {item.quantity} - ₹{item.price * item.quantity}
        </p>
      ))}
      {cartItems.length > 0 && <h2>Total: ₹{total}</h2>}
      {cartItems.length > 0 && (
        <button
          onClick={handleOrder}
          style={{
            padding: '10px 20px',
            background: '#e94e1b',
            color: 'white',
            borderRadius: '10px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Place Order
        </button>
      )}
    </div>
  );
};

export default Checkout;