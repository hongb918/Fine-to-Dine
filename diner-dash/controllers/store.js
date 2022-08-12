require('dotenv').config()
const express = require('express')
const router = express.Router()
const Stores = require('../models/store-model')
const Categories = require('../models/category-model')
const Store = require('../models/store-model')



router.get('/biz', (req, res) => {
    Categories.find(req.params.name)
        .then((data) => {
            res.render('index.ejs', { allCuisines: data, title: 'Home Page' })
        })
        .catch(console.error)
})

router.get('/favicon.ico', (req, res) => {
    res.send('okay')
})

router.get('/biz/:cuisine', (req, res) => {
    Stores.find({})
        .then((data) => {
            res.render('cuisines.ejs', { cuisines: req.params.cuisine, stores: data, title: 'Diner Dash', layout: 'layout.ejs' })
        })
})

router.get('/biz/:cuisine/:name', (req, res) => {
    Store.find({})
        .then((item) => {
            res.render('stores.ejs', { name: req.params.name, store: item, title: 'Diner Dash' })
        })
})

router.get('/new', (req, res) => {
    res.render('new.ejs', { title: 'New Restaurant' });
})

router.post('/add', (req, res) => {
    Stores.create(req.body)
        .then(res.redirect('/biz'))
})

router.get('/:id', (req, res) => {
    Stores.findById(req.params.id)
        .then((store) => res.render('edit.ejs', store))
        // .catch(res.send('error'))
})

router.put('/:id', (req, res) => {
    Stores.findByIdAndUpdate({ _id: req.params.id }, req.body)
        .then((store) =>
            res.redirect('/biz'))
})

router.delete('/:id', (req, res) => {
    Stores.findByIdAndRemove({ _id: req.params.id })
        .then((items) => res.redirect('/biz'));
});


module.exports = router