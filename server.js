// require('dotenv').config()

// const express = require('express')
// const { join } = require('path')

// const passport = require('passport')
// const { User, Anime } = require('./models') // change Post to actual var
// const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')

// const app = express()

// app.use(express.static(join(__dirname, 'public')))
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// app.use(passport.initialize())
// app.use(passport.session())

// passport.use(User.createStrategy())

// passport.serializeUser(User.serializeUser())
// passport.deserializeUser(User.deserializeUser())

// passport.use(new JWTStrategy({
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//   secretOrKey: process.env.SECRET
// }, async function ({ id }, cb) {
//   try {                                         // change Post to actual var
//     const user = await User.findOne({ where: { id }, include: [Anime] })
//     cb(null, user)
//   } catch (err) {
//     cb(err, null)
//   }
// }))

// app.use(require('./routes'))

// async function init() {
//   await require('./db').sync()
//   app.listen(process.env.PORT || 3000)
// }

// init()

// require('./db').sync()
//   .then(() => app.listen(process.env.PORT || 3000))
//   .catch(err => console.log(err))


require('dotenv').config()

const express = require('express')
const { join } = require('path')
const passport = require('passport')
const { User } = require('./models')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())
passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findOne({ id })
    .then(user => done(null, user))
    .catch(err => done(err, null))
})

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}, ({ id }, cb) => User.findOne({ where: { id } })
  .then(user => cb(null, user))
  .catch(err => cb(err))))

app.use(require('./routes'))

require('./db').sync()
  .then(() => app.listen(process.env.PORT || 3000))
  .catch(err => console.log(err))
