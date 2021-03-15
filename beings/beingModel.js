const db = require('../data/connection')

module.exports = {
    getAllBeings,
    getBeingById,
    getBeingActions,
}

function getAllBeings(){
    return db('beings')
}

function getBeingById(id){
    return db('beings').where({id: id}).first()
}

function getBeingActions(id){
    return db('being_actions').where({being_id: id})
}