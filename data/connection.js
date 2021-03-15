require('dotenv').config()
const knex = require('knex');
const { development, production } = require('../knexfile.js');
const environment = process.env.NODE_ENV
const knexConfig = environment === 'production' ? production : development // select which environment you want to use here
module.exports = knex(knexConfig)