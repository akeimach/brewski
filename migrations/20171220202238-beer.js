"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Beers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      beername: {
        type: Sequelize.STRING
      },
      brewery: {
        type: Sequelize.STRING
      },
      abv: {
        type: Sequelize.FLOAT
      },
      ibu: {
        type: Sequelize.FLOAT
      },
      foodPairings: {
        type: Sequelize.STRING
      },
      isOrganic: {
        type: Sequelize.CHAR
      },
      shortDes: {
        type: Sequelize.TEXT("long")
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Beers");
  }
};