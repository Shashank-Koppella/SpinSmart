const express = require('express'); // Import Express framework
const db = require('../db/database'); // Import the database connection
const sendEmail = require('../utils/emailService'); // Import the sendEmail function

const router = express.Router(); // Create a router object

// Route to enter a new laundry order
router.post('/order', async (req, res) => {
    const { cardNumber, itemCount, status } = req.body; // Destructuring request body

    // SQL query to insert a new laundry order
    const query = 'INSERT INTO laundry_orders (card_number, item_count, status) VALUES (?, ?, ?)';
    try {
        await db.run(query, [cardNumber, itemCount, status]); // Executing the query
        res.status(201).json({ message: 'Laundry order created successfully.' }); // Sending success response
    } catch (error) {
        res.status(500).json({ error: 'Failed to create laundry order.' }); // Sending error response
    }
});

// Route to update the status of a laundry order
router.put('/order/:cardNumber', async (req, res) => {
    const { cardNumber } = req.params; // Getting card number from URL parameters
    const { status } = req.body; // Destructuring request body

    // SQL query to update the laundry order status
    const query = 'UPDATE laundry_orders SET status = ? WHERE card_number = ?';
    try {
        await db.run(query, [status, cardNumber]); // Executing the query
        if (status === 'Ready for Pickup') {
            // Fetch the user's email
            const emailQuery = 'SELECT email FROM users WHERE card_number = ?';
            db.get(emailQuery, [cardNumber], (err, row) => {
                if (err) {
                    console.error('Error fetching user email:', err.message);
                } else if (row) {
                    const subject = 'Laundry Status Update';
                    const text = `
Dear Customer,

We are pleased to inform you that the status of your laundry order has been updated.

Current Status: ${status}

Thank you for choosing SpinSmart for your laundry needs. If you have any questions or concerns, please feel free to contact us.

Best regards,  
The SpinSmart Team  
support@spinsmart.com  
+1-800-SPINSMART
`;

                    console.log(`Attempting to send email to: ${row.email}`);
                    sendEmail(row.email, subject, text); // Send email notification
                }
            });
        }
        res.status(200).json({ message: 'Laundry order status updated successfully.' }); // Sending success response
    } catch (error) {
        res.status(500).json({ error: 'Failed to update laundry order status.' }); // Sending error response
    }
});

// Route to fetch all laundry orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await db.all('SELECT * FROM laundry_orders');
    res.json({ message: 'Success', data: orders }); // Ensure JSON response
  } catch (error) {
    console.error('Error fetching orders:', error.message);
    res.status(500).json({ error: 'Failed to fetch orders' }); // Return error as JSON
  }
});

// Route to update the status of a laundry order
router.post('/update-status', (req, res) => {
  const { card_number, status } = req.body;

  if (!card_number || !status) {
    return res.status(400).json({ message: 'Card number and status are required' });
  }

  const query = `UPDATE laundry_orders SET status = ? WHERE card_number = ?`;
  db.run(query, [status, card_number], function (err) {
    if (err) {
      console.error('Error updating status:', err.message);
      return res.status(500).json({ message: 'Failed to update status' });
    }
    if (this.changes === 0) {
      return res.status(404).json({ message: 'Card number not found' });
    }
    res.json({ message: 'Status updated successfully' });
  });
});

// Example usage of sendEmail function
sendEmail('shashank.varma.koppella@gmail.com', 'Subject of the Email', 'Body of the Email');

// Exporting the router to be used in the main server file
module.exports = router;