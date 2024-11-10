'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NPC extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  NPC.init({
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    location_x: DataTypes.FLOAT,
    location_y: DataTypes.FLOAT,
    location_z: DataTypes.FLOAT,
    dialogue: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NPC',
  });
  return NPC;
};