"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Reviews", [{
        starred: true,
        beerRev: "I really enjoyed it!",
        beerScore: 5,     
        createdAt : new Date(),
        updatedAt : new Date(),
        UserId: 1,
        BeerId: 1
      },
      {
        starred: false,
        beerRev: "It could have been better",
        beerScore: 2,     
        createdAt : new Date(),
        updatedAt : new Date(),
        UserId: 2,
        BeerId: 2
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Reviews", null, {});
  }
};