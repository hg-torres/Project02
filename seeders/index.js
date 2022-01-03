require('dotenv').config()

const { User, Anime } = require('../models')
const sequelize = require('../db')

async function seeder() {
  await sequelize.sync({ force: true })

  console.log('----Seeding Data----')

  try {
<<<<<<< HEAD
    await User.register(new User({ username: 'johndoe', email: 'johndoe@gmail.com' }), '1234')
   
    await Anime.bulkCreate(require('./animeSeed.js'))
=======
    await User.register(new User({ firstName: 'John', lastName: 'Doe', username: 'johndoe', email: 'johndoe@gmail.com' }), 'password1234')
    await User.register(new User({ firstName: 'Jane', lastName: 'Doe',username: 'janedoe', email: 'janedoe@gmail.com' }), 'password4321')
    await User.register(new User({ firstName: 'Jack', lastName: 'Doe',username: 'jackdoe', email: 'jackdoe@gmail.com' }), 'rootroot')
    await Anime.bulkCreate(require('./seeds.js'))
>>>>>>> bc65f1d12a3566029b2d125c3c056acc5a62709d
  } catch (err) {
    console.log(err)
  }


  console.log('----Data Seeded----')

  process.exit()
}

seeder()