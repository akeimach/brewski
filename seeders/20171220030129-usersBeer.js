'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('usersBeer', [{
        BeerId: 1,
        UserId: 2,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },
      {
        BeerId: 2,
        UserId: 2,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },
      {
        BeerId: 1,
        UserId: 5,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },
      {
        BeerId: 4,
        UserId: 6,
        createdAt: Sequelize.DATE,
        updatedAt: Sequelize.DATE,
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usersBeer', null, {});
  }
};

