require('dotenv').config()

const { User, Anime } = require('../models')
const sequelize = require('../db')

async function seeder() {
  await sequelize.sync({ force: true })

  console.log('----Seeding Data----')

  try {
    await User.register(new User({ username: 'johndoe', email: 'johndoe@gmail.com' }), '1234')
   
    await Anime.bulkCreate(require('./animeSeed.js'))
  } catch (err) {
    console.log(err)
  }


  console.log('----Data Seeded----')

  process.exit()
}

seeder()