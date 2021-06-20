// Expense Modal which sets up the Expense table in the database through Sequalize

const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Expense extends Model { }

Expense.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    expense_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cost: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    holiday_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "holiday",
        key: "id"
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id"
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "expense",
  }
);

module.exports = Expense;