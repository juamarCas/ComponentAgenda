require("dotenv").config();

module.exports = {
    database:{
        host: process.env.DATABASE_LOCATION,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PW,
        database: process.env.DATABASE,
        port: process.env.DB_PORT
    }
}