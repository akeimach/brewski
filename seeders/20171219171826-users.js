'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
        username: 'Vlad',
        password: "dsagsdgf",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {
        username: 'Boofer',
        password: "j",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {
        username: 'Borris',
        password: "heyo",
        age: 27,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {
        username: 'John',
        password: "heyo",
        age: 29,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {
        username: 'Korkie',
        password: "j",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {
        username: 'Dork Man',
        password: "j",
        age: 21,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {
        username: 'An alligator',
        password: "j",
        age: 22,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {
        username: 'Mohammad Sanchez',
        password: "j",
        age: 22,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {
        username: 'Peeee',
        password: "j",
        age: 22,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {

        username: 'Gorn',
        password: "j",
        age: 23,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {

        username: 'Passionfruit',
        password: "j",
        age: 24,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {

        username: 'Mike',
        password: "j",
        age: 25,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {

        username: 'Mark',
        password: "j",
        age: 26,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {

        username: 'abe',
        password: "heyo",
        age: 28,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {

        username: 'dope',
        password: "heyo",
        age: 29,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      },
      {

        username: 'rrrrrrrrrrrrrrrrrrrrrrrrrreeerrrrrrr',
        password: "heyo",
        age: 24,
        email: "something@gmail.com",
        location: "Oakland",
        createdAt: Sequelize.DATE,
updatedAt: Sequelize.DATE,
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};