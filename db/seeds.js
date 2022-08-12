const Store = require('../models/store-model')
const storeData = require('./store-seeds.json')
const Category = require('../models/category-model')
const categoryData = require('./category-seeds.json')

Store.deleteMany({})
    .then(() => {
        return Store.insertMany(storeData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit();
    })

Category.deleteMany({})
.then(() => {
    return Category.insertMany(categoryData)
})
.then(console.log)
.catch(console.error)
.finally(() => {
    process.exit();
})