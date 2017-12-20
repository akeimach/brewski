'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [{
        starred: true,
        beerRev: "I really enjoyed it!",
        beerScore: 5,     
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        starred: false,
        beerRev: "It could have been better",
        beerScore: 2,     
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        starred: false,
        beerRev: "I am in love with this beer",
        beerScore: 4,     
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        starred: true,
        beerRev: "I wish they made more of this beer",
        beerScore: 4,     
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        starred: true,
        beerRev: "I have no doubt in my mind that Jeb Bush won the election",
        beerScore: 3,     
        createdAt : new Date(),
        updatedAt : new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};