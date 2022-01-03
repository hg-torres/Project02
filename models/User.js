const pls = require('passport-local-sequelize')
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

const User = pls.defineUser(sequelize, {
<<<<<<< HEAD
 firstName: {
  type: DataTypes.STRING,
  allowNull: false
 },
 lastName: {
  type: DataTypes.STRING,
  allowNull: false
 },
 profile: {
  type: DataTypes.STRING,
  allowNull: true
 },
=======
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // profile: {
  //   type: DataTypes.STRING,
  //   allowNull: true
  // },
>>>>>>> 6f2e4751880393373888287a0210bcffd6e9b5b6
  username: {
  type: DataTypes.STRING,
  allowNull: false
 },
 email: {
  type: DataTypes.STRING,
  allowNull: false
 },
 friends: {
  type: DataTypes.STRING,
  allowNull: true
 }
})

module.exports = User