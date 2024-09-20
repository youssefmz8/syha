// src/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import Navigation from './Navigation'; // Ensure you have this component
import './styles.css';
import bannerImage from './Images/banner.jpg'; // Update with the correct path to your image

const Dashboard = ({ isSignedIn }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Sample data for demonstration purposes
  const totalRevenue = 15000;
  const totalExpenses = 5000;
  const netProfit = totalRevenue - totalExpenses;

  const recentTransactions = [
    { date: '2024-09-01', amount: 1000, type: 'Income', category: 'Sales' },
    { date: '2024-09-05', amount: 500, type: 'Expense', category: 'Supplies' },
    { date: '2024-09-10', amount: 1500, type: 'Income', category: 'Services' },
    { date: '2024-09-15', amount: 200, type: 'Expense', category: 'Utilities' },
  ];

  return (
    <div className="dashboard">
      <Navigation />
      <img src={bannerImage} alt="Banner" className="home-banner" />
      <h1>Dashboard</h1>
      {isSignedIn ? (
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
          <div className="charts">
            <h2>Income vs. Expenses</h2>
            {/* Placeholder for Income vs. Expenses Chart */}
            <div className="chart-placeholder">[Chart Here]</div>

            <h2>Expense Breakdown</h2>
            {/* Placeholder for Expense Breakdown Chart */}
            <div className="chart-placeholder">[Chart Here]</div>
          </div>
          <div className="recent-transactions">
            <h2>Recent Transactions</h2>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Type</th>
                  <th>Category</th>
                </tr>
              </thead>
              <tbody>
                {recentTransactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.date}</td>
                    <td>${transaction.amount}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.category}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="auth-buttons">
          <p>Please sign in to view the dashboard.</p>
          <button 
            className="cta-button" 
            onClick={() => navigate('/signin')} // Navigate to Sign In page
          >
            Sign In
          </button>
          <button 
            className="cta-button" 
            onClick={() => navigate('/signup')} // Navigate to Sign Up page
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
