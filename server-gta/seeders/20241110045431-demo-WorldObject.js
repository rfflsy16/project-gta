'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const worldObjects = require('../data/worldobject.json');
    worldObjects.forEach(el => {
      delete el.id;
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert('WorldObjects', worldObjects, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('WorldObjects', null, {});
  }
};
