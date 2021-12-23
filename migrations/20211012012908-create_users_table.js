'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNul: false,
        autoIncrement: true,
        primaryKey: true
      },
      admin: Sequelize.BOOLEAN,
      username: Sequelize.STRING(30),
      password: Sequelize.STRING(30),
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("users");
  }
};
