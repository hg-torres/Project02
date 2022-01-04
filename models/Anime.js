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
    type: DataTypes.TEXT,
    allowNull: false
  }
}, { sequelize, modelName: 'anime' })
>>>>>>> f63a4e36a763e831c11fbe4d4073af87ced4f9d7

module.exports = Anime