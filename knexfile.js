// Update with your config settings.
require('dotenv').config()
// I'm using pg for the development database for now, but I may switch to Sqlite
module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: 'migrations',
  },
    seeds: {
        directory: 'seeds',
    },
  }
};
