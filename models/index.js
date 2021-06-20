// Maps the three modals together and starts building the associated tables

const User = require("./User");
const Holiday = require("./Holiday");
const Expense = require("./Expense")

// Holiday Modal will have foreign key of user id
Holiday.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Links the User Modal to the Holiday Modal
User.hasMany(Holiday, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Expense Modal will have foreign key of holiday id
Expense.belongsTo(Holiday, {
    foreignKey: 'holiday_id',
    onDelete: 'CASCADE'
});

// Links the Holiday Modal to the Expense Modal
Holiday.hasMany(Expense, {
    foreignKey: 'holiday_id',
    onDelete: 'CASCADE'
})

// Gives the Expense a foreign key of user id
Expense.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Links Expense Modal to User
User.hasMany(Expense, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
module.exports = { User, Holiday, Expense };