// DO NOT CHANGE THIS FILE
const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: {
    directory: './data/migrations',
  },
  seeds: {
    directory: './data/seeds',
  },
  // this enables foreign keys in SQLite
  pool: {
    afterCreate: (conn, done) => {
      conn.run('PRAGMA foreign_keys = ON', done)
    },
  },
}

module.exports = {
  development: {
    ...sharedConfig,
    client: "sqlite3",
    connection: { filename: './data/Feed.db3' },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './data/testing.db3' },
  },
  production: {
    client: 'postgres',
    seederStorage: 'sequelize',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    connection: {
      host: 'dpg-ckgt314ldqrs73f6u3gg-a',
      port: 5432,
      database: 'dev_i23c',
      user: 'dev_i23c_user',
      password: 'T5ar6BqpN1aovMDS5s0DO2LhLHZrWHCQ',
    }
  }
};
