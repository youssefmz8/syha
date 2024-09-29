import React, { useState } from 'react';
import './styles.css'; // Assuming your styles are here
import bannerImage from './Images/banner.jpg'; // Ensure this matches the correct path

const ManageBillPayments = () => {
    const [bills, setBills] = useState([]);
    const [billForm, setBillForm] = useState({
        billName: '',
        amount: '',
        dueDate: ''
    });

    const handleChange = (e) => {
        setBillForm({ ...billForm, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setBills([...bills, billForm]);
        setBillForm({
            billName: '',
            amount: '',
            dueDate: ''
        });
    };

    return (
        <div className="manage-bill-payments-container">
            {/* Banner Image */}
            <div className="banner">
                <img src={bannerImage} alt="Banner" />
            </div>

            {/* Bill Payments Section */}
            <div className="bill-payments-content">
                <h1>Manage Bill Payments</h1>

                {/* Bill Form */}
                <div className="bill-form-container">
                    <h2>Add Bill Payment</h2>
                    <form onSubmit={handleSubmit} className="bill-form">
                        <input
                            type="text"
                            name="billName"
                            placeholder="Bill Name"
                            value={billForm.billName}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="number"
                            name="amount"
                            placeholder="Amount"
                            value={billForm.amount}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="date"
                            name="dueDate"
                            value={billForm.dueDate}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit">Add Bill</button>
                    </form>
                </div>

                {/* Bills List */}
                <div className="bill-list-container">
                    <h2>Upcoming Bills</h2>
                    {bills.length > 0 ? (
                        <table className="bill-table">
                            <thead>
                                <tr>
                                    <th>Bill Name</th>
                                    <th>Amount</th>
                                    <th>Due Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bills.map((bill, index) => (
                                    <tr key={index}>
                                        <td>{bill.billName}</td>
                                        <td>${bill.amount}</td>
                                        <td>{bill.dueDate}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No bills added yet.</p>
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="home-footer">
                <p>&copy; 2024 SYHA. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ManageBillPayments;
