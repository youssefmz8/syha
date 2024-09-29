const IncomeExpenseRoutes = require('./IncomeExpenseRoutes');
const invoiceRoutes = require('./invoiceroutes');
const taxRoutes = require('./taxroutes');
const insightsReportsRoutes = require('./reportroutes');
const progressInvoicingRoutes = require('./progressinvoiceroutes');
const billsPaymentsRoutes = require('./billpaymentroutes');
const employeeRoutes = require('./employeeroutes');
const recurringTransactionsRoutes = require('./recurringtransactionroutes');
const inventoryRoutes = require('./inventoryroutes');
const projectProfitabilityRoutes = require('./projectprofitabilityroutes');
const budgetsRoutes = require('./budgetroutes');
const workflowsRoutes = require('./workflowroutes');
const userRoutes = require('./userRoutes');
const authRoutes = require('./authroutes');
const businessRoutes = require('./businessroutes');
const dashboardRoutes = require('./dashboardroutes'); 
const notificationRoutes = require('./notificationroutes');

module.exports = {
    '/income-expenses': IncomeExpenseRoutes,
    '/invoices': invoiceRoutes,
    '/tax': taxRoutes,
    '/insights-reports': insightsReportsRoutes,
    '/progress-invoicing': progressInvoicingRoutes,
    '/bills-payments': billsPaymentsRoutes,
    '/employee': employeeRoutes,
    '/recurring-transactions': recurringTransactionsRoutes,
    '/inventory': inventoryRoutes,
    '/project-profitability': projectProfitabilityRoutes,
    '/budgets': budgetsRoutes,
    '/workflows': workflowsRoutes,
    '/users': userRoutes,
    '/auth': authRoutes,
    '/business': businessRoutes,
    '/dashboard': dashboardRoutes,
    '/notifications': notificationRoutes, 
};
