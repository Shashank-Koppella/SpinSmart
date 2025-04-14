import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

function StatusUpdateForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/admin/update-status', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ card_number: cardNumber, status }),
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: '0 auto' }}
    >
      <TextField
        label="Card Number"
        variant="outlined"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        required
      />
      <TextField
        label="Status"
        variant="outlined"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Update Status
      </Button>
    </Box>
  );
}

export default StatusUpdateForm;