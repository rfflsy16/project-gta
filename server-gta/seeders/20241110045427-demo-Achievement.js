'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const achievements = require('../data/achievement.json');
    achievements.forEach(el => {
      delete el.id;
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert('Achievements', achievements, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Achievements', null, {});
  }
};
