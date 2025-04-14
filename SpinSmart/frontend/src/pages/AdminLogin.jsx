import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
};

function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (credentials.username === 'admin' && credentials.password === 'root') {
      navigate('/admin');
    } else {
      setError('Invalid username or password');
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
          Admin Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          sx={{ marginBottom: 2, backgroundColor: '#ffffff' }}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          sx={{ marginBottom: 2, backgroundColor: '#ffffff' }}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
        {error && <Typography color="error" sx={{ marginTop: 2 }}>{error}</Typography>}
      </Box>
    </motion.div>
  );
}

export default AdminLogin;