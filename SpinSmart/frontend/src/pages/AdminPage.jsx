import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
};

function AdminPage() {
  const [formData, setFormData] = useState({ card_number: '', status: '' });
  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await fetch('/api/admin/update-status', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage('Failed to update status');
    }
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#121212',
          color: '#ffffff',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Admin Dashboard
        </Typography>
        <TextField
          label="Card Number"
          variant="outlined"
          sx={{ marginBottom: 2, backgroundColor: '#ffffff' }}
          onChange={(e) => setFormData({ ...formData, card_number: e.target.value })}
        />
        <TextField
          label="Status"
          variant="outlined"
          sx={{ marginBottom: 2, backgroundColor: '#ffffff' }}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
        />
        <Button variant="contained" color="primary" onClick={handleUpdate}>
          Update Status
        </Button>
        {message && <Typography sx={{ marginTop: 2 }}>{message}</Typography>}
      </Box>
    </motion.div>
  );
}

export default AdminPage;