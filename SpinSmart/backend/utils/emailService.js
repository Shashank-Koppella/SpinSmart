console.log('emailService.js is being executed'); // Add this log

const nodemailer = require('nodemailer');

// Configure the transporter for Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'spinsmart3@gmail.com', // Your Gmail address
    pass: 'tjdqxqxvtwvjamzq',    // Replace with your Gmail app password
  },
});

// Function to send an email
const sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: 'spinsmart3@gmail.com', // Sender's email address
    to,                          // Recipient's email address
    subject,                     // Email subject
    text,                        // Email body
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error('Error sending email:', err);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// Function to send a test email
const sendTestEmail = () => {
  sendEmail('shashank.varma.koppella@gmail.com', 'Test Email', 'This is a test email from SpinSmart.');
};

// Uncomment the line below to send a test email when the file is executed
// sendTestEmail(); // This line is now commented out

// Export the sendEmail function for use in other files
module.exports = sendEmail;