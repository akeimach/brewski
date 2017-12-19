'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
        username: 'Vlad',
        password: "dsagsdgf",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {
        username: 'Boofer',
        password: "j",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {
        username: 'Borris',
        password: "heyo",
        age: 27,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {
        username: 'John',
        password: "heyo",
        age: 29,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {
        username: 'Korkie',
        password: "j",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {
        username: 'Dork Man',
        password: "j",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {
        username: 'An alligator',
        password: "j",
        age: 22,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {
        username: 'Mohammad Sanchez',
        password: "j",
        age: 22,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {
        username: 'Peeee',
        password: "j",
        age: 22,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {

        username: 'Gorn',
        password: "j",
        age: 23,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {

        username: 'Passionfruit',
        password: "j",
        age: 24,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {

        username: 'Mike',
        password: "j",
        age: 25,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {

        username: 'Mark',
        password: "j",
        age: 26,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {

        username: 'abe',
        password: "heyo",
        age: 28,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {

        username: 'dope',
        password: "heyo",
        age: 29,
        email: "something@gmail.com",
        location: "Oakland"
      },
      {

        username: 'rrrrrrrrrrrrrrrrrrrrrrrrrreeerrrrrrr',
        password: "heyo",
        age: 24,
        email: "something@gmail.com",
        location: "Oakland"
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};