import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './pages/LandingPage';
import RegisterPage from './pages/RegisterPage';
import AdminLogin from './pages/AdminLogin';
import AdminPage from './pages/AdminPage';
import CustomerLogin from './pages/CustomerLogin';
import CustomerDashboard from './pages/CustomerDashboard';
import StatusUpdateForm from './components/StatusUpdateForm';

function App() {
  return (
    <div>
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/customer-login" element={<CustomerLogin />} />
            <Route path="/customer/:cardNumber" element={<CustomerDashboard />} />
          </Routes>
        </AnimatePresence>
      </Router>
      <StatusUpdateForm />
    </div>
  );
}

export default App;