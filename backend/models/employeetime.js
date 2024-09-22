// models/employeetime.js

const employeeTimeModel = {
    employeeid: '',     // ID of the employee
    hoursworked: 0,     // Number of hours worked
    date: new Date(),   // Date of work
};

const trackEmployeeTime = (data) => {
    return {
        ...employeeTimeModel,
        ...data,
        date: data.date || new Date(),
    };
};

module.exports = {
    employeeTimeModel,
    trackEmployeeTime,
};
