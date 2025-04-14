import React, { useState } from 'react';
import axios from 'axios';

const StatusCheck = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const fetchStatus = async (cardNumber) => {
    try {
      const response = await axios.get(`/api/status/${cardNumber}`);
      setStatus(response.data.status); // Update the status state
      setError(''); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching status:', error);
      setError('Failed to fetch status. Please try again.');
      setStatus(''); // Clear the status if there's an error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchStatus(cardNumber); // Call the fetchStatus function
  };

  return (
    <div>
      <h2>Check Laundry Status</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <button type="submit">Check Status</button>
      </form>
      {status && <p>Status: {status}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default StatusCheck;