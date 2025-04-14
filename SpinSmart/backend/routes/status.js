const express = require('express');
const db = require('../db/database');
const router = express.Router();

// Route to get the status of a laundry order
router.get('/:card_number', (req, res) => {
  const { card_number } = req.params;
  const query = `SELECT status FROM laundry_orders WHERE card_number = ?`;
  db.get(query, [card_number], (err, row) => {
    if (err) {
      res.status(500).json({ error: 'Failed to fetch status' });
    } else if (!row) {
      res.status(404).json({ error: 'No laundry order found' });
    } else {
      res.status(200).json({ status: row.status });
    }
  });
});

module.exports = router;