import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Home from './Home';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import Inventory from './Inventory';
import ManageBillPayments from './ManageBillPayments';
import Taxes from './Taxes';
import EmployeeManagement from './EmployeeManagement';
import Reports from './Reports';
import Settings from './Settings';
import NotificationSystem from './NotificationSystem';
import Navigation from './Navigation';
import AboutUs from './AboutUs'; 

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isEmployee, setIsEmployee] = useState(false); 

    const handleNavClick = (message) => {
        console.log(message);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsEmployee(false);
        console.log('User logged out');
    };

    return (
        <Router>
            <Navigation 
                onNavClick={handleNavClick} 
                isLoggedIn={isLoggedIn} 
                onLogout={handleLogout} 
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/aboutus" element={<AboutUs />} />
                <Route 
                    path="/signin" 
                    element={<SignIn setIsLoggedIn={setIsLoggedIn} setIsEmployee={setIsEmployee} />} 
                />
                <Route path="/signup" element={<SignUp />} />
                <Route 
                    path="/dashboard" 
                    element={true && !isEmployee ? <Dashboard /> : <Navigate to="/signin" />} 
                />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/manage-bills" element={<ManageBillPayments />} />
                <Route path="/taxes" element={<Taxes />} />
                <Route 
                    path="/employees" 
                    element={isLoggedIn && isEmployee ? <EmployeeManagement /> : <Navigate to="/signup" />} 
                />
                <Route path="/reports" element={<Reports />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/notifications" element={<NotificationSystem />} />
            </Routes>
        </Router>
    );
};

export default App;
