import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, AppBar, Toolbar } from '@mui/material';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

function LandingPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Login successful:', data);
        navigate(`/customer/${data.card_number}`);
      } else {
        setError(data.error || 'Invalid email or password');
      }
    } catch (err) {
      console.error('Error logging in:', err);
      setError('Something went wrong. Please try again.');
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
      {/* Header */}
      <AppBar position="fixed" sx={{ backgroundColor: '#1e1e1e', boxShadow: 'none' }}>
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              fontFamily: 'Space Grotesk',
              fontWeight: 'bold',
              color: '#ffffff',
            }}
          >
            SpinSmart
            <img
              src="/assets/laundry-machine.png" // Ensure this path matches your logo location
              alt="Laundry Machine Logo"
              style={{ marginLeft: 10, height: 40 }}
            />
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(/assets/washer-dryer-industry-2024-laundromat-kv-d.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1,
          filter: 'brightness(0.2)', // Dim the background image
        }}
      />

      {/* Login Form */}
      <Box
        sx={{
          height: 'calc(100vh - 64px)', // Adjust height to exclude AppBar
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#ffffff',
          padding: 2,
          fontFamily: 'Space Grotesk',
          marginTop: '64px', // Push content below the header
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 400,
            backgroundColor: 'rgba(20, 20, 20, 0.95)', // Darker gray background for the form
            padding: 4,
            borderRadius: 2,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)', // Slightly darker shadow
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            sx={{ fontFamily: 'Space Grotesk' }}
          >
            Customer Login
          </Typography>
          <TextField
            label="Email"
            name="email"
            type="email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
            InputLabelProps={{ style: { color: '#9e9e9e', fontFamily: 'Space Grotesk' } }} // Darker label color
            InputProps={{
              style: { color: '#ffffff', fontFamily: 'Space Grotesk' },
            }}
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.password}
            onChange={handleChange}
            required
            InputLabelProps={{ style: { color: '#9e9e9e', fontFamily: 'Space Grotesk' } }} // Darker label color
            InputProps={{
              style: { color: '#ffffff', fontFamily: 'Space Grotesk' },
            }}
          />
          {error && (
            <Typography
              color="error"
              variant="body2"
              sx={{ marginTop: 1, fontFamily: 'Space Grotesk' }}
            >
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2, fontFamily: 'Space Grotesk' }}
            onClick={handleLogin}
          >
            Login
          </Button>
          <Typography
            variant="body2"
            sx={{
              marginTop: 2,
              textAlign: 'center',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontFamily: 'Space Grotesk',
            }}
            onClick={() => navigate('/register')}
          >
            Create Account
          </Typography>
        </Box>

        {/* Admin Login Link */}
        <Typography
          variant="body2"
          sx={{
            marginTop: 2,
            cursor: 'pointer',
            textDecoration: 'underline',
            fontFamily: 'Space Grotesk',
          }}
          onClick={() => navigate('/admin-login')}
        >
          Admin Login
        </Typography>
      </Box>
    </motion.div>
  );
}

export default LandingPage;