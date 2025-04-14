# SpinSmart Backend Documentation

## Overview
SpinSmart is a laundry management system that allows users to register, check the status of their laundry, and receive notifications when their laundry is ready for pickup. The admin can manage laundry orders and update their statuses.

## Technologies Used
- **Node.js**: JavaScript runtime for building the backend server.
- **Express.js**: Web framework for Node.js to handle API requests.
- **SQLite**: Lightweight database for storing laundry records.
- **Nodemailer**: Module for sending email notifications.

## Project Structure
```
backend
├── routes
│   ├── admin.js        # Routes for admin functionalities
│   ├── user.js         # Routes for user registration and management
│   └── status.js       # Routes for checking laundry status
├── db
│   └── database.js     # SQLite database setup and schema
├── utils
│   └── emailService.js  # Logic for sending email notifications
├── server.js           # Entry point for the backend application
├── package.json        # Backend application dependencies and scripts
└── README.md           # Documentation for the backend
```

## Setup Instructions
1. **Clone the Repository**
   ```
   git clone <repository-url>
   cd SpinSmart/backend
   ```

2. **Install Dependencies**
   ```
   npm install
   ```

3. **Run the Server**
   ```
   npm start
   ```

4. **Database Initialization**
   The SQLite database will be automatically created and initialized when the server starts.

## API Endpoints
- **User Registration**
  - `POST /api/user/register`: Register a new user with name, laundry card number, email, and phone number.

- **Admin Functions**
  - `POST /api/admin/order`: Admin can enter new laundry orders.
  - `PUT /api/admin/order/:id`: Admin can update the status of existing laundry orders.

- **Check Laundry Status**
  - `GET /api/status/:cardNumber`: Users can check the current status of their laundry by providing their laundry card number.

## Email Notifications
When the laundry status is updated to "Ready for Pickup", an email notification will be sent to the user using the Nodemailer service.

## Conclusion
This backend setup provides a simple and efficient way to manage laundry orders and user notifications. For further details, refer to the individual route files and utility functions.