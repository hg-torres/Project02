const User = require('./User.js')
const Friend = require('./Friend.js')
const Anime = require('./Anime.js')


User.hasOne(AniList, { foreignKey: 'uid' })
AniList.belongsTo(User, { foreignKey: 'uid' })

module.exports = { User, Anime, Friend }