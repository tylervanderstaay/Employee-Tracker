const mysql = require('mysql2');

const connection = mysql.createConnect({
    host: "localhost",
    user: "root",
    password: "",
    database: "employee_tracker_db"
})

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection; 