'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const vehicles = require('../data/vehicle.json');
    vehicles.forEach(el => {
      delete el.id;
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert('Vehicles', vehicles, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vehicles', null, {});
  }
};
