const mongoose = require('mongoose')
const mongoURI =
process.env.NODE_ENV === 'production'
        ? process.env.DB_URL
        : process.env.DEV_DB_URL

mongoose.connect(mongoURI)
    .then(() => console.log(`Connected to db`))
    .catch((error) => console.log('Connection failed!', error))




















module.exports = mongoose;