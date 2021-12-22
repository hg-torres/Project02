const User = require('./User.js')

User.hasMany(Post, { foreignKey: 'uid' })

module.exports = { User, Post }
