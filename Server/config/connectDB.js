const mySQL = require('mysql2/promise');
const { DB_HOST, DB_NAME, DB_PASS, DB_USER } = require('../utils/secrets')

const pool = mySQL.createPool(
  {
    host: DB_HOST,
    user: DB_USER,
    database: DB_NAME,
    password: DB_PASS,
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0,
  }
)


module.exports = pool
