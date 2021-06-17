const User = require("./User");
const Holiday = require("./Holiday");
const Expense = require("./Expense");

User.hasMany(Holiday);
// Holiday will have foreign key of user id

Holiday.belongsTo(User);

Holiday.hasMany(Expense);
// Expense will have foreign key of holiday id

Expense.belongsTo(Holiday);

module.exports = { Expense, User, Holiday };
