import React from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2);
  };

  const checkoutHandler = () => {
    navigate('/login?redirect=checkout');
  };

  if (cartItems.length === 0) {
    return (
      <div className="glass-card" style={{ textAlign: 'center', padding: '50px', marginTop: '50px' }}>
        <h2>Your cart is empty</h2>
        <Link to="/" style={{ display: 'inline-block', marginTop: '20px', padding: '10px 20px', background: '#38bdf8', color: '#fff', borderRadius: '5px' }}>
          Go Back Shopping
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ marginBottom: '20px' }}>Shopping Cart</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        
        {/* Cart Items List */}
        <div className="glass-card" style={{ flex: 2, padding: '20px', minWidth: '300px' }}>
          {cartItems.map((item) => (
            <div key={item._id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', padding: '15px 0' }}>
              <img src={item.imageUrl || 'https://via.placeholder.com/50'} alt={item.name} style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px' }} />
              <div style={{ flex: 1, marginLeft: '15px' }}>
                <h4 style={{ margin: '0 0 5px 0' }}>{item.name}</h4>
                <p style={{ margin: 0, color: '#38bdf8' }}>${item.price}</p>
              </div>
              <div style={{ margin: '0 15px' }}>Qty: {item.qty}</div>
              <button 
                onClick={() => removeFromCart(item._id)}
                style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '5px', cursor: 'pointer' }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="glass-card" style={{ flex: 1, padding: '20px', height: 'fit-content', minWidth: '250px' }}>
          <h3 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>Order Summary</h3>
          <p style={{ margin: '15px 0' }}>Total Items: {cartItems.reduce((acc, item) => acc + item.qty, 0)}</p>
          <h2 style={{ marginBottom: '20px' }}>Total: ${calculateTotal()}</h2>
          <button 
            onClick={checkoutHandler}
            style={{ width: '100%', padding: '15px', background: '#38bdf8', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;