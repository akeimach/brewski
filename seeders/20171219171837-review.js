'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Review', [{
        starred: true,
        beerRev: "I really enjoyed it!",
        beerScore: 5,
        UserId: 1,
        BeerId: 1,
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {
        starred: false,
        beerRev: "It could have been better",
        beerScore: 2,
        UserId: 1,
        BeerId: 3,
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {
        starred: false,
        beerRev: "I am in love with this beer",
        beerScore: 4,
        UserId: 2,
        BeerId: 1,
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {
        starred: true 'John',
        beerRev: "I wish they made more of this beer",
        beerScore: 4,
        UserId: 3,
        BeerId: 6,
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {
        starred: true 'Korkie',
        beerRev: "I have no doubt in my mind that Jeb Bush won the election",
        beerScore: 3,
        UserId: 5,
        BeerId: 3,
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Review', null, {});
  }
};