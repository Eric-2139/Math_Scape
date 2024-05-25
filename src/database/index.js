const pgp = require("pg-promise")()
const {join} = require("node:path")

const db = pgp("postgres://postgres:root@localhost:5432/api_login_cadastro_cubo")

//db.query("SELECT 1 + 1 AS result").then((result)=> console.log(result))
const filePath = join(__dirname, "create-tables.sql")
const quary = new pgp.QueryFile(filePath)
db.query(quary)
module.exports = db