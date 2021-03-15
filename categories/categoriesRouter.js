const express = require('express')
const router = express.Router()
const Categories = require('./categoriesModel')

// Returns a list of all categories
router.get('/', (req, res) => {
    Categories.getAllCategories()
    .then(categories => {
        res.status(200).json(categories)
    })
    .catch(error => {
        res.status(500).json({ errorMessage: "An error occured."})
    })
})

// Returns the category at a specific id
router.get('/:id', (req, res) => {
    const { id } = req.params
    Categories.getCategoryById(id)
    .then(category =>{
        res.status(200).json(category)
    })
    .catch(error => {
        res.status(500).json({ errorMessage: "An error occured. "})
    })
})

// Returns beings associated with a particular category at specified id
router.get('/beings-by-category/:id', (req, res) => {
    const { id } = req.params
    Categories.getBeingsByCategory(id)
    .then(beings =>{
        res.status(200).json(beings)
    })
    .catch(error => {
        res.status(500).json({ errorMessage: "An error occured."
    })
    })
})

// return all categories associated with being at specified id
router.get('/categories-by-being/:id', (req, res) => {
    const { id } = req.params
    Categories.getCategoriesByBeing(id)
    .then(beings =>{
        res.status(200).json(beings)
    })
    .catch(error => {
        res.status(500).json({ errorMessage: "An error occured."})
    })
})


module.exports = router
