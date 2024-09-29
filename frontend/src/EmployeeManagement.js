import React, { useState } from 'react';
import './styles.css'; // Assuming your styles are here
import bannerImage from './Images/banner.jpg'; // Make sure this path is correct

const EmployeeManagement = () => {
    // State for managing employee data
    const [employees, setEmployees] = useState([]);
    const [employeeName, setEmployeeName] = useState('');
    const [employeeRole, setEmployeeRole] = useState('');
    const [employeeSalary, setEmployeeSalary] = useState('');

    // Handler to add employee
    const handleAddEmployee = (e) => {
        e.preventDefault();

        if (employeeName && employeeRole && employeeSalary) {
            const newEmployee = {
                id: employees.length + 1,
                name: employeeName,
                role: employeeRole,
                salary: employeeSalary,
            };

            setEmployees([...employees, newEmployee]);
            // Reset input fields
            setEmployeeName('');
            setEmployeeRole('');
            setEmployeeSalary('');
        }
    };

    // Handler to remove employee
    const handleRemoveEmployee = (id) => {
        const updatedEmployees = employees.filter((employee) => employee.id !== id);
        setEmployees(updatedEmployees);
    };

    return (
        <div className="employee-management-container">
            {/* Banner Image */}
            <div className="banner">
                <img src={bannerImage} alt="Banner" />
            </div>

            {/* Employee Management Content */}
            <section className="employee-management-content">
                <div className="employee-management-box">
                    <h2>Manage Employees</h2>

                    {/* Form to add employee */}
                    <form className="employee-management-form" onSubmit={handleAddEmployee}>
                        <input
                            type="text"
                            placeholder="Employee Name"
                            value={employeeName}
                            onChange={(e) => setEmployeeName(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Role"
                            value={employeeRole}
                            onChange={(e) => setEmployeeRole(e.target.value)}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Salary"
                            value={employeeSalary}
                            onChange={(e) => setEmployeeSalary(e.target.value)}
                            required
                        />
                        <button type="submit">Add Employee</button>
                    </form>
                </div>

                {/* List of employees */}
                <div className="employee-list-box">
                    <h2>Employee List</h2>
                    {employees.length === 0 ? (
                        <p>No employees added yet.</p>
                    ) : (
                        <ul className="employee-list">
                            {employees.map((employee) => (
                                <li key={employee.id}>
                                    {employee.name} - {employee.role}, Salary: OMR{employee.salary}
                                    <button onClick={() => handleRemoveEmployee(employee.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>

            {/* Footer */}
            <footer className="home-footer">
                <p>&copy; 2024 SYHA. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default EmployeeManagement;
