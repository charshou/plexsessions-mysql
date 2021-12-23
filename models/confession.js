const Sequelize  = require("sequelize");
const sequelize = require("../database/connection");

module.exports = sequelize.define("Confession", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNul: false,
        autoIncrement: true,
        primaryKey: true
    },
    status: Sequelize.BOOLEAN,
    content: Sequelize.STRING(200),
})