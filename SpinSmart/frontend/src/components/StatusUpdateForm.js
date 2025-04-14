import React, { useState } from 'react';
import axios from 'axios';

const StatusUpdateForm = () => {
  const [userId, setUserId] = useState('');
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/admin/update-status', { userId, status });
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.error || 'An error occurred.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User ID"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      />
      <button type="submit">Update Status</button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default StatusUpdateForm;