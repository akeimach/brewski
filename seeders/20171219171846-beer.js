'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 return queryInterface.bulkInsert('Beer', [{
        beername: 'Ripper',
        brewery: "Stone",
        abv: 4.8,
        shortDes: "A pretty solid beer"
      },
      {
        beername: 'Jamaican red ale',
        brewery: "Mad River",
        abv: 6,
        shortDes: "A red ale, interesting"
      },
      {
        beername: 'Sculpin',
        brewery: "Ballast Point",
        abv: 7,
        shortDes: "A FAR too expensive beer"
      },
      {
        beername: 'Coors',
        brewery: "shittttt",
        abv: 3.1,
        shortDes: "crap"
      },
      {
        beername: 'Falco',
        brewery: "Evil Twin",
        abv: 7.3,
        shortDes: "I wish there was more of these"
      },
      {
        beername: 'Eggnog IPA',
        brewery: "Evil Twin",
        abv: 8.1,
        shortDes: "Lol"
      },
      {
        beername: 'Lil Sumpin Sumpin',
        brewery: "Lagunitas",
        abv: 7.5,
        shortDes: "Hard to go wrong with this"
      },
      {
        beername: 'Russian Imperial Stout',
        brewery: "Stone",
        abv: 10.5,
        shortDes: "One of my favs"
      },
      {
        beername: 'Bud Light',
        brewery: "more shitttttt",
        abv: 3.9,
        shortDes: "stoppppp"
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Beer', null, {});
  }
};
