const IncomeExpenseRoutes = require('./IncomeExpenseRoutes');
const invoiceRoutes = require('./invoiceroutes');
const taxRoutes = require('./taxroutes');
const insightsReportsRoutes = require('./reportroutes');
const progressInvoicingRoutes = require('./progressinvoiceroutes');
const billsPaymentsRoutes = require('./billpaymentroutes');
const employeeTimeRoutes = require('./employeetimeroutes');
const multiCurrencyRoutes = require('./multicurrencyroutes');
const recurringTransactionsRoutes = require('./recurringtransactionroutes');
const inventoryRoutes = require('./inventoryroutes');
const projectProfitabilityRoutes = require('./projectprofitabilityroutes');
const budgetsRoutes = require('./budgetroutes');
const workflowsRoutes = require('./workflowroutes');
const userRoutes = require('./userRoutes');
const authRoutes = require('./authroutes');

module.exports = {
    '/income-expenses': IncomeExpenseRoutes,
    '/invoices': invoiceRoutes,
    '/tax': taxRoutes,
    '/insights-reports': insightsReportsRoutes,
    '/progress-invoicing': progressInvoicingRoutes,
    '/bills-payments': billsPaymentsRoutes,
    '/employee-time': employeeTimeRoutes,
    '/multi-currency': multiCurrencyRoutes,
    '/recurring-transactions': recurringTransactionsRoutes,
    '/inventory': inventoryRoutes,
    '/project-profitability': projectProfitabilityRoutes,
    '/budgets': budgetsRoutes,
    '/workflows': workflowsRoutes,
    '/users': userRoutes,
    '/auth': authRoutes
};
