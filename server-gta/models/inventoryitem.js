'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class InventoryItem extends Model {
    static associate(models) {
      // Many-to-one relationship with Characters
      InventoryItem.belongsTo(models.Character, {
        foreignKey: 'character_id',
        onDelete: 'CASCADE',
      });

      // One-to-many relationship with Transactions
      InventoryItem.hasMany(models.Transaction, {
        foreignKey: 'item_id',
        onDelete: 'SET NULL',
      });
    }
  }

  InventoryItem.init({
    item_name: DataTypes.STRING,
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    item_type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'InventoryItem',
  });

  return InventoryItem;
};
