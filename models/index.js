const Expense = require("./expense");
const User = require("./user");
const Holiday = require("./holiday");

Holiday.belongsTo(User);

Expense.belongsTo(Holiday);

Holiday.hasMany(Expense);

module.exports = { Expense, User, Holiday };
