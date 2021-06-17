const Expense = require("./Expense");
const User = require("./User");
const Holiday = require("./Holiday");

Holiday.belongsTo(User);

Expense.belongsTo(Holiday);

Holiday.hasMany(Expense);

module.exports = { Expense, User, Holiday };
