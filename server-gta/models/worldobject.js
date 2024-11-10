'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WorldObject extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorldObject.init({
    object_type: DataTypes.STRING,
    location_x: DataTypes.FLOAT,
    location_y: DataTypes.FLOAT,
    location_z: DataTypes.FLOAT,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WorldObject',
  });
  return WorldObject;
};