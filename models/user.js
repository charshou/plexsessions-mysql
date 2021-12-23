const Sequelize  = require("sequelize");
const sequelize = require("../database/connection");

module.exports = sequelize.define("User", {
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