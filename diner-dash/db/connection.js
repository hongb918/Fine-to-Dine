require('dotenv').config()
// console.log(process.env)
const mongoose = require('mongoose')
const mongoURI =
process.env.NODE_ENV === 'production'
        ? process.env.DB_URL
        // : process.env.DEV_DB_URL
        : "mongodb+srv://hongbui:bareFOOT@cluster1.fcv6b.mongodb.net/project2?retryWrites=true&w=majority"

mongoose.connect(mongoURI)
    .then(() => console.log(`Connected to db`))
    .catch((error) => console.log('Connection failed!', error))




















module.exports = mongoose;