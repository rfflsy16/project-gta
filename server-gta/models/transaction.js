'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      // Many-to-one relationship with Users
      Transaction.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
      });

      // Many-to-one relationship with InventoryItems
      Transaction.belongsTo(models.InventoryItem, {
        foreignKey: 'item_id',
        onDelete: 'SET NULL',
      });
    }
  }

  Transaction.init({
    amount: DataTypes.FLOAT,
    transaction_type: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Transaction',
  });

  // Hook to update character's cash after a transaction
  Transaction.afterCreate(async (transaction, options) => {
    const character = await transaction.getCharacter();
    if (transaction.transaction_type === 'purchase') {
      character.cash -= transaction.amount;
      await character.save();
    }
  });

  return Transaction;
};
