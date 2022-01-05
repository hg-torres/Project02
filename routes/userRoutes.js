const router = require('express').Router()
<<<<<<< HEAD
const { Anime , User} = require('../models')
=======
const { Anime, User } = require('../models')
>>>>>>> b026d1da4e49a817c37f0acf8ba9bf0ee60ccd63
const passport = require('passport')
const jwt = require('jsonwebtoken')

router.post('/users/register', (req, res) => {
  User.register(new User({ firstName: req.body.firstName, lastName: req.body.lastName, username: req.body.username, email: req.body.email }), req.body.password, err => {
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
