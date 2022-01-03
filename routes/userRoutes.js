const router = require('express').Router()
<<<<<<< HEAD
const { Anime , User} = require('../models')
=======
const { User, Anime } = require('../models')
>>>>>>> 21e0d263f704d63d747a50b9d0fe047b0a368b34
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post('/users/register', (req, res) => {
 User.register(new User({ username: req.body.username, email: req.body.email }), req.body.password, err => {
  if (err) { console.log(err) }
  res.sendStatus(200)
 })
})

router.post('/users/login', (req, res) => {
 User.authenticate()(req.body.username, req.body.password, (err, user) => {
  if (err) { console.log(err) }

  res.json(user ? {
   username: user.username,
   token: jwt.sign({ id: user.id }, process.env.SECRET)
  } : null)
 })
})

router.get('/users/profile', passport.authenticate('jwt'), (req, res) => res.json(req.user))


module.exports = router
