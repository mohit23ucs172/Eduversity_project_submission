import React from 'react';

// 'variant' can be 'danger' (red), 'success' (green), or 'info' (blue)
const Message = ({ variant = 'info', children }) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'danger': return '#f8d7da';
      case 'success': return '#d4edda';
      default: return '#cce5ff';
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case 'danger': return '#721c24';
      case 'success': return '#155724';
      default: return '#004085';
    }
  };

  return (
    <div style={{
      padding: '15px',
      marginBottom: '20px',
      border: '1px solid transparent',
      borderRadius: '4px',
      backgroundColor: getBackgroundColor(),
      color: getTextColor(),
      width: '100%',
      boxSizing: 'border-box'
    }}>
      {children}
    </div>
  );
};

export default Message;