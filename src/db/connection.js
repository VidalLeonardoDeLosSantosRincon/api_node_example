const mysql = require('mysql');
const $ = require('../../helpers');

const db =  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "node21_mysql"
});

db.connect(error => {
    if(error){
        $('Error with database connection!');
        process.kill(process.pid, 'SIGTERM');
    }else{
        $('Server database running...');
    }
});

module.exports = db;