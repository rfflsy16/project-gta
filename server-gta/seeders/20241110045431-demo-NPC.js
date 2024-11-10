'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const npcs = require('../data/npc.json');
    npcs.forEach(el => {
      delete el.id;
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert('NPCs', npcs, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('NPCs', null, {});
  }
};
