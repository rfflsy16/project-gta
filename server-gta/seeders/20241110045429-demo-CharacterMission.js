'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const characterMissions = require('../data/characterMission.json');
    characterMissions.forEach(el => {
      delete el.id;
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert('CharacterMissions', characterMissions, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('CharacterMissions', null, {});
  }
};
