const pgPromise = require("pg-promise")
const config = {
    host: "3.145.194.87",
    port: "5432",
    database: "turismo",
    user: "admin",
    password: "root",
    ssl: false
}

const pgp = pgPromise({})
const db = pgp(config)

exports.db = db