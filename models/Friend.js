const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Friend extends Model { }
Friend.init({
  list: {
    type: DataTypes.ARRAY,
    allowNull: true
  },
}, { sequelize, modelName: 'friend' })

module.exports = Friend