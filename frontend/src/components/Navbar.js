import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={navStyle}>
      <h2 style={{ color: '#fff' }}>Museum Assistant</h2>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/chat" style={linkStyle}>Chatbot</Link>
        <Link to="/book" style={linkStyle}>Book Tickets</Link>
      </div>
    </nav>
  );
};

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#4a90e2',
  padding: '0.75rem 1.5rem',
};

const linkStyle = {
  color: '#fff',
  marginLeft: '1.2rem',
  textDecoration: 'none',
  fontSize: '1rem',
};

export default Navbar;
