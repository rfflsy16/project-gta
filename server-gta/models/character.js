'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    static associate(models) {
      Character.belongsTo(models.User, {
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
      });

      Character.hasMany(models.Vehicle, {
        foreignKey: 'character_id',
        onDelete: 'CASCADE',
      });

      Character.hasMany(models.InventoryItem, {
        foreignKey: 'character_id',
        onDelete: 'CASCADE',
      });

      Character.belongsToMany(models.Mission, {
        through: models.CharacterMission,
        foreignKey: 'character_id',
        onDelete: 'CASCADE',
      });

      Character.hasMany(models.Achievement, {
        foreignKey: 'character_id',
        onDelete: 'CASCADE',
      });
    }
  }

  Character.init({
    name: DataTypes.STRING,
    level: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    xp: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    health: {
      type: DataTypes.INTEGER,
      defaultValue: 100,
    },
    location_x: DataTypes.FLOAT,
    location_y: DataTypes.FLOAT,
    location_z: DataTypes.FLOAT,
    cash: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
  }, {
    sequelize,
    modelName: 'Character',
  });

  // Hook for leveling up character
  Character.afterUpdate(async (character, options) => {
    const levelUpXP = 1000;
    if (character.xp >= levelUpXP) {
      character.level += 1;
      character.xp = 0;
      await character.save();
    }
  });

  return Character;
};
