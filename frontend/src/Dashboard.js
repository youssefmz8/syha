import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Assuming you have styles defined here

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Your Business Dashboard</h1>
                <p>Welcome back! Here you can manage all aspects of your business effectively.</p>
                <h3>Select Your Business Feature:</h3>
            </header>

            <section className="features-section">
                <h2>Core Features</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Manage Bills</h3>
                        <p>Effortlessly track and manage your bills to ensure timely payments.</p>
                        <Link to="/manage-bills" className="feature-link">Go to Manage Bills</Link>
                    </div>
                    <div className="feature-card">
                        <h3>Inventory Management</h3>
                        <p>Keep track of your inventory and streamline your supply chain.</p>
                        <Link to="/inventory" className="feature-link">Go to Inventory</Link>
                    </div>
                    <div className="feature-card">
                        <h3>Employee Management</h3>
                        <p>Manage employee records, payroll, and performance seamlessly.</p>
                        <Link to="/employees" className="feature-link">Go to Employee Management</Link>
                    </div>
                    <div className="feature-card">
                        <h3>Reports</h3>
                        <p>Generate detailed reports to analyze your business performance.</p>
                        <Link to="/reports" className="feature-link">Go to Reports</Link>
                    </div>
                    <div className="feature-card">
                        <h3>Notifications</h3>
                        <p>Stay informed with reminders for important deadlines and updates.</p>
                        <Link to="/notifications" className="feature-link">Go to Notifications</Link>
                    </div>
                </div>
            </section>

            <footer className="home-footer">
        <p>&copy; 2024 SYHA. All rights reserved.</p>
      </footer>
        </div>
    );
};

export default Dashboard;
