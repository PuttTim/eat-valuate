const mysql = require('mysql')

const dbConfig = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'admin',
    connectionLimit: 5,
    database: 'eat-valuate'
}

const pool = mysql.createPool(dbConfig)

pool.on('connection', connection => {
    console.log('Connected: [eat-valuate]')

    connection.on('error', err => console.log('Error: [eat-valuate]', err))

    connection.on('close', err => console.log('Close: [eat-valuate]', err))
})

module.exports = pool
