# SpinSmart Laundry Management System

## Overview
SpinSmart is a laundry management system that allows users to register, check the status of their laundry, and receive notifications when their laundry is ready for pickup. Admins can manage laundry orders and update their statuses.

## Features
- **User Registration**: Users can register with their name, laundry card number, email, and phone number.
- **Admin Portal**: Admins can enter laundry orders and update their statuses (e.g., received, washing, drying, ready for pickup).
- **Live Status Check**: Users can check the current status of their laundry by entering their laundry card number.
- **Email Notifications**: Users receive an email notification when their laundry is marked as "Ready for Pickup".

## Technologies Used
- **Frontend**: 
  - HTML, CSS for UI
  - React.js for dynamic user interface
  - React Router for navigation
- **Backend**: 
  - Node.js with Express.js for API handling
  - SQLite for database management
  - Nodemailer for sending email notifications

## Project Structure
```
SpinSmart
├── frontend
│   ├── public
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src
│   │   ├── components
│   │   │   ├── AdminPortal.jsx
│   │   │   ├── RegistrationForm.jsx
│   │   │   ├── StatusCheck.jsx
│   │   │   └── Navbar.jsx
│   │   ├── App.js
│   │   ├── index.js
│   │   └── App.css
│   ├── package.json
│   └── README.md
├── backend
│   ├── routes
│   │   ├── admin.js
│   │   ├── user.js
│   │   └── status.js
│   ├── db
│   │   └── database.js
│   ├── utils
│   │   └── emailService.js
│   ├── server.js
│   ├── package.json
│   └── README.md
└── README.md
```

## Setup Instructions

### Frontend
1. Navigate to the `frontend` directory.
2. Run `npm install` to install the necessary dependencies.
3. Start the React application with `npm start`.
4. Open your browser and go to `http://localhost:3000` to access the application.

### Backend
1. Navigate to the `backend` directory.
2. Run `npm install` to install the necessary dependencies.
3. Start the Node.js server with `npm start`.
4. The server will run on `http://localhost:5000`.

## Usage
- Users can register through the registration form and check the status of their laundry.
- Admins can access the admin portal to manage laundry orders.
- Users will receive email notifications when their laundry is ready for pickup.

## Contributing
Feel free to contribute to the project by submitting issues or pull requests. Your feedback and contributions are welcome!

## License
This project is open-source and available under the MIT License.