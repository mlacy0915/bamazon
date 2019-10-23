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
})

    console.log("Shop our selection...\n");

    console.log('  ID  |      Product Name      |  Department Name  |   Price  | In Stock');
    console.log('- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - ')

    for(var i = 0; i < res.length; i++){
        var itemID = res[i].ItemID + '';
        itemID = padText("  ID  ", itemID);

        var productName = res[i].ProductName + '';
        productName = padText("      Product Name      ", productName);
    
        var departmentName = res[i].DepartmentName + '';
        departmentName = padText("  Department Name  ", departmentName);
    
        var price = '$' + res[i].Price.toFixed(2) + ''; 
        price = padText("   Price  ", price);
    
        var quantity = res[i].StockQuantity + '';

        console.log(itemID + '|' + productName + '|' + departmentName + '|' + price + '|    ' + quantity);
  }