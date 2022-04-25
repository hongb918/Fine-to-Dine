require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const storeController = require('./controllers/store')
const Store = require('./models/store-model')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/' + 'public'))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use('/store', storeController);
app.set("port", process.env.PORT || 5001);



/* app.get('/', (req, res) => {
    res.send('Deploying Project 2')
}) */

app.get('/', (req, res) => {
    let cuisine = req.params.cuisine
    Store.find(cuisine)
        .then((store) => {
            res.json(store)
        })
        .catch(console.error)
})










app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`)
})



