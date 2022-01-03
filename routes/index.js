const router = require('express').Router()

router.use('/api', require('./userRoutes.js'))
<<<<<<< HEAD
=======
router.use('/api', require('./animeRoutes.js'))
// router.use('/api', require('./friendRoutes.js'))
>>>>>>> 21e0d263f704d63d747a50b9d0fe047b0a368b34

module.exports = router
