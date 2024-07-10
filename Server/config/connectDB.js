const mySQL = require('mysql2/promise');

  const  pool =  mySQL.createPool(
    {
        host:"localhost"  ,
        user: "root",
        database: "flashCard",
        password:"duy270304",
        waitForConnections: true,
        connectionLimit: 10,
        maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
        idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
        queueLimit: 0,
        enableKeepAlive: true,
        keepAliveInitialDelay: 0,
      }
)
 pool.getConnection(async function (err, connection) {
    if (err instanceof Error) {
      console.log(err);
      return;
    }
    console.log(" connection database sucessfully ")
    connection.release();
  });
  

module.exports = pool
