'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WorldObjects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      object_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      location_x: {
        type: Sequelize.FLOAT,
      },
      location_y: {
        type: Sequelize.FLOAT,
      },
      location_z: {
        type: Sequelize.FLOAT,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('WorldObjects');
  }
};