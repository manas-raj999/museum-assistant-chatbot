import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.hero}>
        <h1 style={styles.title}>
          Welcome to <span style={styles.gradientText}>Museum Assistant</span>
        </h1>
        <p style={styles.subtitle}>
          Explore. Interact. Experience.
        </p>

        <div style={styles.buttons}>
          <Link to="/chat" style={{ ...styles.button, ...styles.chatButton }}>
            💬 Talk to Assistant
          </Link>
          <Link to="/book" style={{ ...styles.button, ...styles.bookButton }}>
            🎟️ Book Tickets
          </Link>
        </div>
      </div>

      <div style={styles.card}>
        <img
          src="https://images.unsplash.com/photo-1601981211022-0e3f3fbb0b06"
          alt="Museum"
          style={styles.image}
        />
        <p style={styles.cardText}>
          “Museums are where memories and history collide with curiosity.”
        </p>
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    fontFamily: `'Poppins', sans-serif`,
    background: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)',
    minHeight: '100vh',
    padding: '2rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  hero: {
    textAlign: 'center',
    animation: 'fadeIn 1s ease-in',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
    color: '#2c3e50',
  },
  gradientText: {
    background: 'linear-gradient(45deg, #4a90e2, #9b59b6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '2rem',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  button: {
    padding: '0.9rem 1.7rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '50px',
    textDecoration: 'none',
    color: '#fff',
    boxShadow: '0 4px 14px rgba(0,0,0,0.15)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
  chatButton: {
    background: 'linear-gradient(45deg, #00c6ff, #0072ff)',
  },
  bookButton: {
    background: 'linear-gradient(45deg, #00b09b, #96c93d)',
  },
  card: {
    marginTop: '3rem',
    maxWidth: '700px',
    background: 'rgba(255, 255, 255, 0.75)',
    borderRadius: '20px',
    padding: '1.5rem',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(12px)',
    textAlign: 'center',
    animation: 'fadeIn 2s ease-in',
  },
  image: {
    width: '100%',
    borderRadius: '15px',
    marginBottom: '1rem',
    objectFit: 'cover',
    maxHeight: '350px',
  },
  cardText: {
    fontStyle: 'italic',
    color: '#333',
    fontSize: '1rem',
  },
};

export default Home;
