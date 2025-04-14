const express = require('express');
const db = require('../db/database');
const router = express.Router();

// Route to register a new user
router.post('/register', (req, res) => {
  const { name, email, phone, password } = req.body;

  console.log('Register request received:', { name, email, phone, password }); // Debug log

  const query = `
    INSERT INTO users (name, card_number, email, phone, password)
    VALUES (?, ?, ?, ?, ?)
  `;

  const cardNumber = Math.floor(10000 + Math.random() * 90000).toString(); // Generate random card number

  db.run(query, [name, cardNumber, email, phone, password], (err) => {
    if (err) {
      console.error('Error registering user:', err.message); // Log the error
      res.status(500).json({ error: 'Failed to register user' });
    } else {
      console.log('User registered successfully:', { name, cardNumber, email, phone }); // Log success
      res.status(200).json({ message: 'User registered successfully', card_number: cardNumber });
    }
  });
});

// Route to log in a user
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  console.log('Login request received:', { email, password }); // Debug log

  const query = `
    SELECT card_number FROM users WHERE email = ? AND password = ?
  `;

  db.get(query, [email, password], (err, row) => {
    if (err) {
      console.error('Error logging in user:', err.message); // Log the error
      res.status(500).json({ error: 'Failed to log in' });
    } else if (!row) {
      console.log('Invalid login credentials'); // Debug log
      res.status(401).json({ error: 'Invalid email or password' });
    } else {
      console.log('Login successful:', row); // Debug log
      res.status(200).json({ card_number: row.card_number });
    }
  });
});

module.exports = router;