'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Taxes',
      [
        {
          Adult: 1000,
          Child: 500,
          weekendAdult: 1200,
          weekendChild: 700,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Taxes', null, {});
  },
};
