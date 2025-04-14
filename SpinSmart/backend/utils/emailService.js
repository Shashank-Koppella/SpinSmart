console.log('emailService.js is being executed'); // Add this log

const nodemailer = require('nodemailer');

// Configure the email transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service
  auth: {
    user: 'your-email@gmail.com', // Replace with your email
    pass: 'your-email-password', // Replace with your email password
  },
});

// Function to send an email
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'your-email@gmail.com', // Replace with your email
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = { sendEmail };