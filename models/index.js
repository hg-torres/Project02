const User = require('./User.js')
const Anime = require('./Anime.js')
const Friend = require('./Friend.js')


User.hasOne(Anime, { foreignKey: 'uid' })
Anime.belongsTo(User, { foreignKey: 'uid' })

module.exports = { User, Anime}
