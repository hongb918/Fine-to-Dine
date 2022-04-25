const Store = require('../models/store-model')
const storeData = require('./store-seeds.json')

Store.deleteMany({})
    .then(() => {
        return Store.insertMany(storeData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit();
    })