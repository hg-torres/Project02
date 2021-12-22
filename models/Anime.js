const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Anime extends Model { }
Anime.init({
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

module.exports = Anime