'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Achievement extends Model {
    static associate(models) {
      // Many-to-one relationship with Characters
      Achievement.belongsTo(models.Character, {
        foreignKey: 'character_id',
        onDelete: 'CASCADE',
      });
    }
  }

  Achievement.init({
    achievement_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    points: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    is_earned: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'Achievement',
  });

  return Achievement;
};
