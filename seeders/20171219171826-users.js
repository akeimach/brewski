"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [{
        username: "Vlad",
        googleId: "sdgdflgkdflgkjljk35345345",
        email: "something@gmail.com",
        picture: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: "Boofer",
        googleId: "sdgdflgkdflgkjljk35345345",
        email: "something@gmail.com",
        picture: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: "Borris",
        googleId: "sdgdflgkdflgkjljk35345345",
        email: "something@gmail.com",
        picture: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: "John",
        googleId: "sdgdflgkdflgkjljk35345345",
        email: "something@gmail.com",
        picture: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: "Korkie",
        googleId: "sdgdflgkdflgkjljk35345345",
        email: "something@gmail.com",
        picture: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: "Dork Man",
        googleId: "sdgdflgkdflgkjljk35345345",
        email: "something@gmail.com",
        picture: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: "An alligator",
        googleId: "sdgdflgkdflgkjljk35345345",
        email: "something@gmail.com",
        picture: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: "Mohammad Sanchez",
        googleId: "sdgdflgkdflgkjljk35345345",
        email: "something@gmail.com",
        picture: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: "Peeee",
        googleId: "sdgdflgkdflgkjljk35345345",
        email: "something@gmail.com",
        picture: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {

        username: "Gorn",
        googleId: "sdgdflgkdflgkjljk35345345",
        email: "something@gmail.com",
        picture: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: "Passionfruit",
        googleId: "sdgdflgkdflgkjljk35345345",
        email: "something@gmail.com",
        picture: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: "Mike",
        googleId: "sdgdflgkdflgkjljk35345345",
        email: "something@gmail.com",
        picture: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: "Mark",
        googleId: "sdgdflgkdflgkjljk35345345",
        email: "something@gmail.com",
        picture: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: "abe",
        googleId: "sdgdflgkdflgkjljk35345345",
        email: "something@gmail.com",
        picture: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: "dope",
        googleId: "sdgdflgkdflgkjljk35345345",
        email: "something@gmail.com",
        picture: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        username: "rrrrrrrrrrrrrrrrrrrrrrrrrreeerrrrrrr",
        googleId: "sdgdflgkdflgkjljk35345345",
        email: "something@gmail.com",
        picture: "Oakland",
        createdAt : new Date(),
        updatedAt : new Date(),
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  }
};