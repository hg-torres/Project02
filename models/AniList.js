const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class AniList extends Model { }
AniList.init({
  list: {
    type: DataTypes.ARRAY,
    allowNull: true
  },
}, { sequelize, modelName: 'AniList' })

module.exports = AniList