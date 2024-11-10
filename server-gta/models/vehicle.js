'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Vehicle extends Model {
    static associate(models) {
      // Many-to-one relationship with Characters
      Vehicle.belongsTo(models.Character, {
        foreignKey: 'character_id',
        onDelete: 'CASCADE',
      });
    }
  }

  Vehicle.init({
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    color: DataTypes.STRING,
    location_x: DataTypes.FLOAT,
    location_y: DataTypes.FLOAT,
    location_z: DataTypes.FLOAT,
    fuel: {
      type: DataTypes.FLOAT,
      defaultValue: 100,
    },
    health: {
      type: DataTypes.FLOAT,
      defaultValue: 100,
    },
  }, {
    sequelize,
    modelName: 'Vehicle',
  });

  return Vehicle;
};
