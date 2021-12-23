'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("confessions", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNul: false,
        autoIncrement: true,
        primaryKey: true
      },
      status: Sequelize.BOOLEAN,
      content: Sequelize.STRING(200),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("confessions");
  }
};
