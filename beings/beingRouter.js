const express = require('express')
const router = express.Router()
const Beings = require('./beingsModel')

// Returns a list of all beings
router.get('/', (req, res) => {
    Beings.getAllBeings()
    .then(beings => {
        res.status(200).json(beings)
    })
    .catch(error => {
        res.status(500).json({ errorMessage: "An error occured."})
    })
})

// Returns a being at a specific id
router.get('/:id', (req, res) => {
    const { id } = req.params
    Beings.getBeingById(id)
    .then(being =>{
        res.status(200).json(being)
    })
    .catch(error => {
        res.status(500).json({ errorMessage: "An error occured. "})
    })
})

// Returns actions of being at the specified id
router.get('/:id/actions', (req, res) => {
    const { id } = req.params
    Beings.getBeingActions(id)
    .then(actions =>{
        res.status(200).json(actions)
    })
    .catch(error => {
        res.status(500).json({ errorMessage: "An error occured."})
    })
})


module.exports = router
