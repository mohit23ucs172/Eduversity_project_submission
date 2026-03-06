import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { userInfo, logout } = useAuth();
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate('/login');
  };

  // Calculate total items in cart for the badge
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <header style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      marginBottom: '30px', 
      paddingBottom: '15px', 
      borderBottom: '2px solid #eee' 
    }}>
      <Link to="/" style={{ textDecoration: 'none', color: '#333' }}>
        <h2 style={{ margin: 0 }}>Smart E-Commerce</h2>
      </Link>
      
      <nav style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/cart" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', position: 'relative' }}>
          Cart
          {cartItemCount > 0 && (
            <span style={{
              background: 'red', color: 'white', borderRadius: '50%', padding: '2px 6px', 
              fontSize: '12px', position: 'absolute', top: '-10px', right: '-15px'
            }}>
              {cartItemCount}
            </span>
          )}
        </Link>
        
        {userInfo ? (
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <span>Hello, <strong>{userInfo.name}</strong></span>
            <button 
              onClick={logoutHandler} 
              style={{ padding: '6px 12px', background: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Login</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;