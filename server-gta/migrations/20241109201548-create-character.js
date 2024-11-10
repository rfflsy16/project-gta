'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Characters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        validate: {
          notNull: {
            msg: 'user_id is required'
          },
          notEmpty: {
            msg: 'user_id is required'
          }
        },
        references: {
          model: 'Users',
          key: "id"
        }
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          notNull: {
            msg: 'name is required'
          },
          notEmpty: {
            msg: 'name is required'
          }
        }
      },
      level: {
        type: Sequelize.INTEGER,
        defaultValue: 1
      },
      xp: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      health: {
        type: Sequelize.INTEGER,
        defaultValue: 100
      },
      location_x: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      location_y: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      location_z: {
        type: Sequelize.FLOAT,
        defaultValue: 0
      },
      cash: {
        type: Sequelize.FLOAT,
        defaultValue: 0
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
    await queryInterface.dropTable('Characters');
  }
};