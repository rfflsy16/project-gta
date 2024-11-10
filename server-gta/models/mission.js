'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Mission extends Model {
    static associate(models) {
      // Many-to-many relationship with Characters through CharacterMissions
      Mission.belongsToMany(models.Character, {
        through: models.CharacterMission,
        foreignKey: 'mission_id',
        onDelete: 'CASCADE',
      });
    }
  }

  Mission.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    reward_cash: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    reward_xp: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    location_x: DataTypes.FLOAT,
    location_y: DataTypes.FLOAT,
    location_z: DataTypes.FLOAT,
    is_completed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'Mission',
  });

  return Mission;
};
