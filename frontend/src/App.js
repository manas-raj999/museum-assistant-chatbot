import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path if needed
import ChatBox from './components/ChatBox';
import TicketBookingForm from './components/TicketBooking';
import Home from './components/home';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<ChatBox />} />
        <Route path="/book" element={<TicketBookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
