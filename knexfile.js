module.exports = {
    development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'password',
        database: 'car-manage-sahat',
      },
      migrations: {
        directory: ''
      },
    },
  };
  