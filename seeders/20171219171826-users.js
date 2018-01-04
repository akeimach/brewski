'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        username: 'Vlad',
        googleId: "sdgdflgkdflgkjljk35345345",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: 'Boofer',
        googleId: "sdgdflgkdflgkjljk35345345",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};