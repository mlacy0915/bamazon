// var prompt = require('prompt');
var mysql = require('mysql');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Kisses@12",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
});

connection.query("SELECT * FROM Products", function(err, res) {
    if(err) throw err;

    console.log("Come Shop With Us!");
})

