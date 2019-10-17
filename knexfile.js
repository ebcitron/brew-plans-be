// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
        directory: __dirname + '/database/migrations',
      },
    seeds: {
        directory: __dirname + '/database/seeds',
      },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
        directory: __dirname + '/database/migrations',
      },
    seeds: {
        directory: __dirname + '/database/seeds',
      },
  },
};
