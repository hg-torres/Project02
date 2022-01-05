require('dotenv').config()

<<<<<<< HEAD
const { User, Anime } = require('../models')
=======
const { User, Anime} = require('../models')
>>>>>>> b026d1da4e49a817c37f0acf8ba9bf0ee60ccd63
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
<<<<<<< HEAD
>>>>>>> f63a4e36a763e831c11fbe4d4073af87ced4f9d7
=======
>>>>>>> b026d1da4e49a817c37f0acf8ba9bf0ee60ccd63
  } catch (err) {
    console.log(err)
  }


  console.log('----Data Seeded----')

  process.exit()
}
<<<<<<< HEAD

seeder()
=======
  seeder()
>>>>>>> b026d1da4e49a817c37f0acf8ba9bf0ee60ccd63
