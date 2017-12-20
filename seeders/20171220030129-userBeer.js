'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('userBeer', [{
        BeerId: 1,
        UserId: 2
      },
      {
        BeerId: 2,
        UserId: 2
      },
      {
        BeerId: 1,
        UserId: 5
      },
      {
        BeerId: 4,
        UserId: 6
      },

    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('userBeer', null, {});
  }
};
