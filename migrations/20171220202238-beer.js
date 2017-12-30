'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Beers', {
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
        type: Sequelize.INTEGER
      },
      ibu: {
        type: Sequelize.INTEGER
      },
      foodPairings: {
        type: Sequelize.STRING
      },
      isOrganic: {
        type: Sequelize.BOOLEAN
      },
      shortDes: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('Beers');
  }
};