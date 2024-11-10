'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CharacterMission extends Model {
    static associate(models) {
      CharacterMission.belongsTo(models.Character, {
        foreignKey: 'character_id',
        onDelete: 'CASCADE',
      });

      CharacterMission.belongsTo(models.Mission, {
        foreignKey: 'mission_id',
        onDelete: 'CASCADE',
      });
    }
  }

  CharacterMission.init({
    status: {
      type: DataTypes.STRING,
      defaultValue: 'in-progress',
    },
  }, {
    sequelize,
    modelName: 'CharacterMission',
  });

  return CharacterMission;
};
