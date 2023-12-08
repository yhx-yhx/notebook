const dotenv = require('dotenv')
dotenv.config()

module.exports = {
    APP_PORT,
    APP_HOST,
    // APP_HOST_PORT,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
} = process.env