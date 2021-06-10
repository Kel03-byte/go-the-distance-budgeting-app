const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Holiday extends Model { }
Holiday.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    destination_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    total_budget: {
        type: DataTypes.DECIMAL,
        allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'holiday',
  }
);
module.exports = Holiday;