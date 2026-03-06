import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      marginTop: '50px', 
      padding: '20px 0', 
      borderTop: '1px solid #eee', 
      textAlign: 'center', 
      color: '#666' 
    }}>
      <p>Copyright &copy; {new Date().getFullYear()} Smart E-Commerce Platform. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;