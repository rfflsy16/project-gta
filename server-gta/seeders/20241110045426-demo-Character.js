'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const characters = require('../data/character.json');
    characters.forEach(el => {
      delete el.id;
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert('Characters', characters, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Characters', null, {});
  }
};
