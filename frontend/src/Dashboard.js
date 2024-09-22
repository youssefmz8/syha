// src/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';
import './styles.css';
import bannerImage from './Images/banner.jpg'; // Update with the correct path to your image

const Dashboard = ({ isSignedIn }) => {
  const navigate = useNavigate();

  // Sample data for demonstration purposes
  const totalRevenue = 15000;
  const totalExpenses = 5000;
  const netProfit = totalRevenue - totalExpenses;

  return (
    <div className="dashboard">
      <Navigation />
      <img src={bannerImage} alt="Banner" className="home-banner" />
      <h1>Dashboard</h1>

      {true ? (
        <>
          <div className="metrics">
            <div className="metric-card">
              <h2>Total Revenue</h2>
              <p>${totalRevenue}</p>
            </div>
            <div className="metric-card">
              <h2>Total Expenses</h2>
              <p>${totalExpenses}</p>
            </div>
            <div className="metric-card">
              <h2>Net Profit</h2>
              <p>${netProfit}</p>
            </div>
          </div>

          <div className="features">
            <h2>Explore Features</h2>
            <div className="feature-card" onClick={() => navigate('/track-income')}>
              <h3>Track Income & Expenses</h3>
              <p>Manage your finances effortlessly.</p>
            </div>
            <div className="feature-card" onClick={() => navigate('/invoices')}>
              <h3>Send Custom Invoices & Quotes</h3>
              <p>Create and manage invoices in seconds.</p>
            </div>
            <div className="feature-card" onClick={() => navigate('/gst-vat')}>
              <h3>Track GST and VAT</h3>
              <p>Stay compliant with tax regulations.</p>
            </div>
            <div className="feature-card" onClick={() => navigate('/insights-reports')}>
              <h3>Insights & Reports</h3>
              <p>Gain valuable insights into your finances.</p>
            </div>
            <div className="feature-card" onClick={() => navigate('/recurring-transactions')}>
              <h3>Recurring Transactions & Bills</h3>
              <p>Automate your routine payments.</p>
            </div>
            <div className="feature-card" onClick={() => navigate('/employee-time-tracking')}>
              <h3>Track Employee Time</h3>
              <p>Monitor and manage employee work hours.</p>
            </div>
            <div className="feature-card" onClick={() => navigate('/multi-currency')}>
              <h3>Multi-Currency Support</h3>
              <p>Manage transactions in different currencies.</p>
            </div>
            <div className="feature-card" onClick={() => navigate('/inventory')}>
              <h3>Track Inventory</h3>
              <p>Keep tabs on your stock levels.</p>
            </div>
            <div className="feature-card" onClick={() => navigate('/project-profitability')}>
              <h3>Project Profitability</h3>
              <p>Analyze the profitability of your projects.</p>
            </div>
            <div className="feature-card" onClick={() => navigate('/manage-budgets')}>
              <h3>Manage Budgets</h3>
              <p>Create and track your budgets.</p>
            </div>
            <div className="feature-card" onClick={() => navigate('/automate-workflows')}>
              <h3>Automate Workflows</h3>
              <p>Streamline your processes for efficiency.</p>
            </div>
            <div className="feature-card" onClick={() => navigate('/progress-invoicing')}>
              <h3>Progress Invoicing</h3>
              <p>Manage your progress invoicing with ease.</p>
            </div>
            <div className="feature-card" onClick={() => navigate('/manage-bills-payments')}>
              <h3>Manage Bills & Payments</h3>
              <p>Efficiently handle your bills and payments.</p>
            </div>
          </div>
        </>
      ) : (
        <div className="auth-buttons">
          <p>Please sign in to view the dashboard.</p>
          <button 
            className="cta-button" 
            onClick={() => navigate('/signin')}
          >
            Sign In
          </button>
          <button 
            className="cta-button" 
            onClick={() => navigate('/signup')}
          >
            Sign Up
          </button>
        </div>
      )}
      <footer className="footer">
        <p>&copy; 2024 SYHA. All rights reserved.</p>
        <p>syha@gmail.com</p>
        <p>Muscat, Oman</p>
      </footer>
    </div>
  );
};

export default Dashboard;
