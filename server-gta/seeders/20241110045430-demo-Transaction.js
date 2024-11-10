'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const transactions = require('../data/transaction.json');
    transactions.forEach(el => {
      delete el.id;
      el.createdAt = el.updatedAt = new Date();
    });
    await queryInterface.bulkInsert('Transactions', transactions, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transactions', null, {});
  }
};
