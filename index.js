require('dotenv').config()
const express = require('express')
const ejsLayouts = require('express-ejs-layouts')
const methodOverride = require('method-override')
const storeController = require('./controllers/store')
const Store = require('./models/store-model')
const app = express()

app.use(ejsLayouts)
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/css', express.static(__dirname + 'public/css'))
app.use(express.static(__dirname + 'public/images'))
app.use(storeController)

app.set('view engine', 'ejs')
app.set("port", process.env.PORT || 5001);

app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`)
})



