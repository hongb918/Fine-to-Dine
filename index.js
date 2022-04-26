require('dotenv').config()
const express = require('express')
const methodOverride = require('method-override')
const storeController = require('./controllers/store')
const Store = require('./models/store-model')
const ejsLayouts = require('express-ejs-layouts')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/' + 'public'))
app.use(methodOverride('_method'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/', storeController);
app.use(ejsLayouts)
app.set("port", process.env.PORT || 5001);



app.listen(app.get("port"), () => {
    console.log(`✅ PORT: ${app.get("port")} 🌟`)
})



