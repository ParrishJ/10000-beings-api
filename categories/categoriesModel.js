const db = require('../data/connection')

module.exports = {
    getAllCategories,
    getCategoryById,
    getBeingsByCategory,
    getCategoriesByBeing,
}

function getAllCategories(){
    return db('categories')
}

function getCategoryById(id){
    return db('categories').where({id: id}).first()
}

function getBeingsByCategory(id){
    return db('beings').leftJoin('being_categories', 'beings.id', 'being_categories.being_id').where({ category_id: id})
}

function getCategoriesByBeing(id){
    return db('categories').leftJoin('being_categories', 'categories.id', 'being_categories.category_id').where({ being_id: id})
}