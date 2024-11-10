'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Missions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      reward_cash: {
        type: Sequelize.FLOAT,
        defaultValue: 0,
      },
      reward_xp: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
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
      is_completed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
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
    await queryInterface.dropTable('Missions');
  }
};