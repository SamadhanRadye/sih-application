// src/components/Aside.js

import React from 'react';
import { Link } from 'react-router-dom';

const asideStyle = {
  position: 'fixed',
  top: '56px', // height of navbar (default Bootstrap is 56px)
  left: 0,
  width: '200px',
  height: '100vh',
  backgroundColor: '#f8f9fa',
  borderRight: '1px solid #dee2e6',
  paddingTop: '20px',
  zIndex: 1000
};

const linkStyle = {
  display: 'block',
  padding: '10px 20px',
  textDecoration: 'none',
  color: '#000'
};

function Aside() {
  return (
    <aside style={asideStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/science-simulations" style={linkStyle}>SCIENCE SIMULATION</Link>
      <Link to="" style={linkStyle}>GAME</Link>
    </aside>
  );
}

export default Aside;
