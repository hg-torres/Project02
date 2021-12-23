const User = require('./User.js')
const Anime = require('./Anime.js')
const Friend = require('./Friend.js')


User.hasMany(Anime, { foreignKey: 'uid' })
Anime.belongsTo(User, { foreignKey: 'uid' })
User.hasMany(Friend, { foreignKey: 'uid' })
// Friend.belongsToMany(User,{ foreignKey: 'uid'}) 

module.exports = { User, Anime, Friend }
