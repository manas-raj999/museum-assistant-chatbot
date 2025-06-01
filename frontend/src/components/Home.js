import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🖼️ Welcome to the Museum Assistant</h1>
      <p style={styles.subtitle}>
        Discover exhibits, ask questions, and book your tickets seamlessly!
      </p>

      <div style={styles.buttonContainer}>
        <Link to="/chat" style={styles.button}>💬 Chat with Assistant</Link>
        <Link to="/book" style={{ ...styles.button, backgroundColor: '#34a853' }}>
          🎟️ Book Tickets
        </Link>
      </div>

      <div style={styles.imageContainer}>
        <img
          src="https://images.unsplash.com/photo-1601981211022-0e3f3fbb0b06"
          alt="Museum Art"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '2rem',
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#f7f9fc',
    minHeight: '80vh',
    maxWidth: '1200px',
    margin: 'auto',
  },
  title: {
    fontSize: '2.5rem',
    color: '#2c3e50',
    margin: '0 1rem',
  },
  subtitle: {
    fontSize: '1.2rem',
    margin: '1rem 1rem 2rem',
    color: '#555',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
    marginBottom: '2rem',
  },
  button: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#4a90e2',
    color: '#fff',
    borderRadius: '8px',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    minWidth: '140px',
    textAlign: 'center',
  },
  imageContainer: {
    marginTop: '2rem',
  },
  image: {
    maxWidth: '100%',
    borderRadius: '15px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  },

  // Media queries via JS - inline styles can't directly do this,
  // so we'll do a quick workaround with a style tag inside component:
};

// Responsive styles using a style tag with media queries
const ResponsiveStyles = () => (
  <style>{`
    @media (max-width: 768px) {
      .buttonContainer {
        flex-direction: column !important;
        align-items: center;
      }
      .buttonContainer > a {
        width: 80% !important;
        margin-bottom: 1rem !important;
      }
      h1 {
        font-size: 2rem !important;
      }
      p {
        font-size: 1rem !important;
      }
    }
  `}</style>
);

export default function HomeWithResponsive() {
  return (
    <>
      <ResponsiveStyles />
      <Home />
    </>
  );
}
