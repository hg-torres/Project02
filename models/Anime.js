const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Anime extends Model { }
Anime.init({
<<<<<<< HEAD
 title: {
  type: DataTypes.STRING,
  allowNull: false
 },
 image: {
  type: DataTypes.STRING,
  allowNull: false
 },
 rating: {
  type: DataTypes.STRING,
  allowNull: false
 },
 synopsis: {
  type: DataTypes.STRING,
  allowNull: false
 }
}, { sequelize, modelName: 'Anime' })
=======
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  synopsis: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, { sequelize, modelName: 'anime' })
>>>>>>> 6f2e4751880393373888287a0210bcffd6e9b5b6

module.exports = Anime