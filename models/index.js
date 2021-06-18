const User = require("./User");
const Holiday = require("./Holiday");
const Expense = require("./Expense");

// Holiday will have foreign key of user id
Holiday.belongsTo(User, {
    foreignKey: 'user_id',
});

Holiday.hasMany(Expense);
// Expense will have foreign key of holiday id

Expense.belongsTo(Holiday);

module.exports = { Expense, User, Holiday };
