const router = require('express').Router()
<<<<<<< HEAD
const { Anime , User} = require('../models')
=======
const { User, Post } = require('../models')
>>>>>>> 6f2e4751880393373888287a0210bcffd6e9b5b6
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post('/users/register', (req, res) => {
<<<<<<< HEAD
 User.register(new User({ username: req.body.username, email: req.body.email }), req.body.password, err => {
  if (err) { console.log(err) }
  res.sendStatus(200)
 })
=======
  User.register(new User({ firstName: req.body.firstName, lastName: req.body.lastName, username: req.body.username, email: req.body.email }), req.body.password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
>>>>>>> 6f2e4751880393373888287a0210bcffd6e9b5b6
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
