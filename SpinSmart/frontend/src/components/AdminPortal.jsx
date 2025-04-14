import React, { useState } from 'react';
import axios from 'axios';

function AdminPortal() {
  const [formData, setFormData] = useState({
    card_number: '',
    status: '',
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin/update-status', formData);
      setMessage(response.data.message);
      setError('');
    } catch (error) {
      console.error('Error updating status:', error);
      setError('Failed to update laundry status.');
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Admin Portal</h2>
      <form onSubmit={handleUpdateStatus}>
        <input
          type="text"
          name="card_number"
          placeholder="Card Number"
          value={formData.card_number}
          onChange={handleChange}
        />
        <input
          type="text"
          name="status"
          placeholder="New Status"
          value={formData.status}
          onChange={handleChange}
        />
        <button type="submit">Update Status</button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default AdminPortal;