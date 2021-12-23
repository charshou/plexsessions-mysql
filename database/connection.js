const Sequelize = require("sequelize")

const sequelize = new Sequelize("plexsessions", "root", "Char2332$$", { host: "127.0.0.1", dialect: "mysql" })

module.exports = sequelize;
global.sequelize = sequelize;