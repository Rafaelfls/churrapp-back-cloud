// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host: 'ec2-52-70-15-120.compute-1.amazonaws.com',
      user: 'yntoptmemdbnhi',
      password: 'c586cbe6a323542ef2a77ac4e4ae174683140a9f58fdf9cc947432eaf25a821c',
      database: 'dfk1kccnkchri3',
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    migrations: {
      directory: './src/database/migrations'
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      host: 'ec2-52-70-15-120.compute-1.amazonaws.com',
      user: 'yntoptmemdbnhi',
      password: 'c586cbe6a323542ef2a77ac4e4ae174683140a9f58fdf9cc947432eaf25a821c',
      database: 'dfk1kccnkchri3'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  teste: {
    client: 'pg',
    connection: {
      host: 'ec2-52-70-15-120.compute-1.amazonaws.com',
      user: 'yntoptmemdbnhi',
      password: 'c586cbe6a323542ef2a77ac4e4ae174683140a9f58fdf9cc947432eaf25a821c',
      database: 'dfk1kccnkchri3',
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
    migrations: {
      directory: './src/database/migrations'
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
