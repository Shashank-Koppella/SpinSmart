import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Box, Typography, AppBar, Toolbar } from '@mui/material';

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const { name, email, phone, password, confirmPassword } = formData;

    // Validate form fields
    if (!name || !email || !phone || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, password }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess('Registration successful! Redirecting to login...');
        setTimeout(() => navigate('/'), 2000); // Redirect to login page after 2 seconds
      } else {
        setError(data.error || 'Failed to register');
      }
    } catch (err) {
      console.error('Error registering user:', err);
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
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

      {/* Registration Form */}
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
            backgroundColor: 'rgba(20, 20, 20, 0.95)', // Darker gray background
            padding: 4,
            borderRadius: 2,
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
          }}
        >
          <Typography variant="h5" gutterBottom align="center">
            Create Account
          </Typography>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
            InputLabelProps={{ style: { color: '#9e9e9e' } }}
            InputProps={{ style: { color: '#ffffff' } }}
          />
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
            InputLabelProps={{ style: { color: '#9e9e9e' } }}
            InputProps={{ style: { color: '#ffffff' } }}
          />
          <TextField
            label="Phone"
            name="phone"
            type="tel"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.phone}
            onChange={handleChange}
            required
            InputLabelProps={{ style: { color: '#9e9e9e' } }}
            InputProps={{ style: { color: '#ffffff' } }}
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
            InputLabelProps={{ style: { color: '#9e9e9e' } }}
            InputProps={{ style: { color: '#ffffff' } }}
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            InputLabelProps={{ style: { color: '#9e9e9e' } }}
            InputProps={{ style: { color: '#ffffff' } }}
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ marginTop: 1 }}>
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="success" variant="body2" sx={{ marginTop: 1 }}>
              {success}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}
            onClick={handleRegister}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default RegisterPage;