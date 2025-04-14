import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

function CustomerDashboard() {
  const { cardNumber } = useParams();
  const [status, setStatus] = useState('');
  const [details, setDetails] = useState({});

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetch(`/api/status/${cardNumber}`);
        const data = await response.json();
        setStatus(data.status);
        setDetails(data.details || {});
      } catch (error) {
        console.error('Error fetching details:', error);
      }
    };
    fetchDetails();
  }, [cardNumber]);

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
          Laundry Status
        </Typography>
        <Paper sx={{ padding: 3, backgroundColor: '#1e1e1e' }}>
          <Typography variant="h6">Card Number: {cardNumber}</Typography>
          <Typography variant="h6">Status: {status}</Typography>
          <Typography variant="h6">Details: {JSON.stringify(details)}</Typography>
        </Paper>
      </Box>
    </motion.div>
  );
}

export default CustomerDashboard;