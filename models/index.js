const User = require('./User.js')
const AniList = require('./AniList.js')
//const Anime = require('./Anime.js')


User.hasOne(AniList, { foreignKey: 'uid' })
AniList.belongsTo(User, { foreignKey: 'uid' })

module.exports = { User, AniList }