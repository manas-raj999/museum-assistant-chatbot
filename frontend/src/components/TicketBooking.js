import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../config'; // Import the base URL

const TicketBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    tickets: 1,
  });
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'tickets' ? Math.max(1, Number(value)) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage('');

    try {
      const response = await axios.post(`${API_BASE_URL}/book-ticket`, formData);
      setMessage(response.data.message || 'Booking successful!');
      setFormData({
        name: '',
        email: '',
        date: '',
        tickets: 1,
      });
    } catch (error) {
      setMessage('Error booking ticket, please try again later.');
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={{
      maxWidth: '500px',
      margin: '2rem auto',
      padding: '1rem',
      borderRadius: '10px',
      boxShadow: '0 0 10px rgba(0,0,0,0.1)',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#fefefe'
    }}>
      <h2 style={{ textAlign: 'center', color: '#4a90e2' }}>Book Your Tickets</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={inputStyle}
            placeholder="Your full name"
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={inputStyle}
            placeholder="you@example.com"
          />
        </label>
        <label>
          Date of Visit:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <label>
          Number of Tickets:
          <input
            type="number"
            name="tickets"
            min="1"
            value={formData.tickets}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <button
          type="submit"
          disabled={submitting}
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#4a90e2',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            fontSize: '1.1rem',
            cursor: submitting ? 'not-allowed' : 'pointer',
            marginTop: '1rem'
          }}
        >
          {submitting ? 'Booking...' : 'Book Tickets'}
        </button>
      </form>
      {message && (
        <p style={{ marginTop: '1rem', color: 'green', fontWeight: 'bold', textAlign: 'center' }}>
          {message}
        </p>
      )}
    </div>
  );
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '0.6rem',
  margin: '0.4rem 0 1rem 0',
  fontSize: '1rem',
  borderRadius: '5px',
  border: '1px solid #ccc',
  outline: 'none',
  boxSizing: 'border-box',
};

export default TicketBookingForm;
