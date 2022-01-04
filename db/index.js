const { Sequelize } = require('sequelize')

module.exports = new Sequelize('mysql://root:hoothoot@localhost:3306/anime_db')