'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const inventoryItems = require('../data/inventoryItem.json');
    inventoryItems.forEach(el => {
      delete el.id;
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert('InventoryItems', inventoryItems, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('InventoryItems', null, {});
  }
};
