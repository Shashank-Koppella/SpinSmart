# SpinSmart Frontend Documentation

## Overview
SpinSmart is a laundry management system web application that allows users to register, check the status of their laundry, and receive notifications when their laundry is ready for pickup. The admin can manage laundry orders and update their statuses.

## Features
- User registration with name, laundry card number, email, and phone number.
- Admin portal for entering and updating laundry orders.
- User status check to view the current status of laundry.
- Email notifications sent to users when their laundry is ready for pickup.

## Technologies Used
- **Frontend**: React.js, HTML, CSS
- **Backend**: Node.js, Express.js, SQLite, Nodemailer

## Getting Started

### Prerequisites
- Node.js installed on your machine.

### Installation
1. Navigate to the `frontend` directory:
   ```
   cd SpinSmart/frontend
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

### Running the Application
To start the frontend application, run:
```
npm start
```
This will launch the application in your default web browser.

### File Structure
- **public/index.html**: Main HTML file for the React application.
- **public/favicon.ico**: Favicon for the web application.
- **src/components**: Contains React components for the application.
  - **AdminPortal.jsx**: Admin interface for managing laundry orders.
  - **RegistrationForm.jsx**: User registration form.
  - **StatusCheck.jsx**: Component for checking laundry status.
  - **Navbar.jsx**: Navigation component for the application.
- **src/App.js**: Main application component with routing.
- **src/index.js**: Entry point for the React application.
- **src/App.css**: CSS styles for the application.

## Contributing
Feel free to contribute to the project by submitting issues or pull requests.

## License
This project is open-source and available under the MIT License.