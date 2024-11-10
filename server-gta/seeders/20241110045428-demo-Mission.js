'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const missions = require('../data/mission.json');
    missions.forEach(el => {
      delete el.id;
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert('Missions', missions, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Missions', null, {});
  }
};
