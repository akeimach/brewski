'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Review', [{
        starred: true,
        password: "dsagsdgf",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {
        starred: true,
        password: "j",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {
        starred: true,
        password: "heyo",
        age: 27,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {
        starred: true 'John',
        password: "heyo",
        age: 29,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {
        starred: true 'Korkie',
        password: "j",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {
        starred: true 'Dork Man',
        password: "j",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {
        starred: true 'An alligator',
        password: "j",
        age: 22,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {
        starred: true 'Mohammad Sanchez',
        password: "j",
        age: 22,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {
        starred: true 'Peeee',
        password: "j",
        age: 22,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {

        starred: true 'Gorn',
        password: "j",
        age: 23,
        email: "something@gmail.com",
        location: "Oakland"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Review', null, {});
  }
};