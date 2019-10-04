const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sw1440617333',
    database: 'internetcafe'
});

module.exports = connection;