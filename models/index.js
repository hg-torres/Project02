const User = require('./User.js')
const Anime = require('./Anime.js')
const Friend = require('./Friend.js')


User.hasMany(Anime, { foreignKey: 'uid' })
Anime.belongsTo(User, { foreignKey: 'uid' })
<<<<<<< HEAD
User.hasMany(Friend, { foreignKey : 'uid'})
// Friend.belongsToMany(User, {foreignkey : 'uid'})
=======
User.hasMany(Friend, { foreignKey: 'uid' })
//Friend.belongsToMany(User, { foreignKey: 'uid' })

>>>>>>> 6f2e4751880393373888287a0210bcffd6e9b5b6

module.exports = { User, Anime, Friend }
