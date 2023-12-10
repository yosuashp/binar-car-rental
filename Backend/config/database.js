/** Destruct environment variable to get database configuration */
const {
    DB_USERNAME = "postgres",
    DB_PASSWORD = "password",
    DB_HOST = "localhost",
    DB_NAME = "challeng-7-sahat",
    DB_LOGGING = false
} = process.env;

module.exports = {
    development: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: `${DB_NAME}_development`,
        host: DB_HOST,
        dialect: "postgres",
        logging: DB_LOGGING
    },
    test: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: `${DB_NAME}_test`,
        host: DB_HOST,
        dialect: "postgres",
        logging: DB_LOGGING
    },
    production: {
        username: DB_USERNAME,
        password: DB_PASSWORD,
        database: `${DB_NAME}_production`,
        host: DB_HOST,
        dialect: "postgres",
        logging: false
    },
};
