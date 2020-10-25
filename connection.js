// pomise-mysql
const promise_mysql = require("promise-mysql");
// port process.env.PORT
const connectionPool = promise_mysql.createPool({
    multipleStatements: true,
    host: '52.27.196.252',
    user: 'savy-user',
    password: 'tH1212N~',
    database: 'savy'
});

module.exports = connectionPool; // this is a promise that resolves with connnection pool as its value