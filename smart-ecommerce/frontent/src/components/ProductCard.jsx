import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      
      {/* Image Wrapper - Keeps all images the exact same size */}
      <div style={{ width: '100%', height: '220px', backgroundColor: 'rgba(255,255,255,0.02)' }}>
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          onError={(e) => { e.target.src = 'https://via.placeholder.com/300x220?text=Image+Not+Found' }} // Fallback for broken Airpods image
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      
      {/* Text Content */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', fontWeight: '600', color: '#fff' }}>
          {product.name}
        </h3>
        
        {/* Category pushes the price/button to the bottom so all cards align perfectly */}
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '15px', flex: 1 }}>
          {product.category}
        </p>
        
        <h2 style={{ color: '#38bdf8', marginBottom: '15px', fontWeight: '700', fontSize: '1.5rem' }}>
          ${product.price}
        </h2>
        
        <button 
          className="btn-primary"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
      
    </div>
  );
};

export default ProductCard;