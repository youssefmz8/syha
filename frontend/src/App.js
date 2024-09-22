// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import Navigate here
import Home from './Home';
import Dashboard from './Dashboard';
import Records from './Records';
import Transactions from './Transactions';
import Settings from './Settings';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Navigation from './Navigation';
import TrackIncome from './TrackIncome'; // Import new components
import Invoices from './Invoices';
import GstVat from './GstVat';
import InsightsReports from './InsightsReports';
import RecurringTransactions from './RecurringTransactions';
import EmployeeTimeTracking from './EmployeeTimeTracking';
import MultiCurrency from './MultiCurrency';
import Inventory from './Inventory';
import ProjectProfitability from './ProjectProfitability';
import ManageBudgets from './ManageBudgets';
import AutomateWorkflows from './AutomateWorkflows';
import ProgressInvoicing from './ProgressInvoicing'; // Import your new component
import ManageBillsPayments from './ManageBillsPayments'; // Import your new component
import './styles.css';

const App = () => {
  const [bannerText, setBannerText] = useState('Welcome to the Home Page');
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status

  const handleNavClick = (text) => {
    setBannerText(text);
  };

  const handleLogin = () => {
    setIsLoggedIn(true); // Set login status to true
  };

  const handleLogout = () => {
    setIsLoggedIn(false); // Set login status to false
  };

  return (
    <Router>
      <Navigation 
        onNavClick={handleNavClick} 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout} 
      />
      <div>
        <Routes>
          <Route 
            path="/" 
            element={<Home bannerText={bannerText} />} 
          />
          <Route 
            path="/dashboard" 
            element={<Dashboard isSignedIn={isLoggedIn} bannerText={bannerText} />} 
          />
          <Route 
            path="/records" 
            element={<Records isSignedIn={isLoggedIn} bannerText={bannerText} />} 
          />
          <Route 
            path="/transactions" 
            element={<Transactions isSignedIn={isLoggedIn} bannerText={bannerText} />} 
          />
          <Route 
            path="/settings" 
            element={<Settings isSignedIn={isLoggedIn} onLogout={handleLogout} />} 
          />
          <Route 
            path="/signup" 
            element={<SignUp />} 
          />
          <Route 
            path="/signin" 
            element={<SignIn onLogin={handleLogin} />} 
          />

          {/* Feature Routes */}
          <Route path="/track-income" element={<TrackIncome />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/gst-vat" element={<GstVat />} />
          <Route path="/insights-reports" element={<InsightsReports />} />
          <Route path="/recurring-transactions" element={<RecurringTransactions />} />
          <Route path="/employee-time-tracking" element={<EmployeeTimeTracking />} />
          <Route path="/multi-currency" element={<MultiCurrency />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/project-profitability" element={<ProjectProfitability />} />
          <Route path="/manage-budgets" element={<ManageBudgets />} />
          <Route path="/automate-workflows" element={<AutomateWorkflows />} />
          <Route path="/progress-invoicing" element={<ProgressInvoicing />} /> {/* Add this line */}
          <Route path="/manage-bills-payments" element={<ManageBillsPayments />} /> {/* Add this line */}

          <Route 
            path="*" 
            element={<Navigate to="/" replace />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
