'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Beers', [{
        beername: 'Ripper',
        brewery: "Stone",
        abv: 4.8,
        ibu: 33,
        foodPairings: "Apples, oranges, pizza pie",
        isOrganic: true,
        shortDes: "A pretty solid beer",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        beername: 'Jamaican red ale',
        brewery: "Mad River",
        abv: 6,
        ibu: 33,
        foodPairings: "Apples, oranges, pizza pie",
        isOrganic: false,
        shortDes: "A red ale, interesting",
        createdAt : new Date(),
        updatedAt : new Date(),
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Beers', null, {});
  }
};
