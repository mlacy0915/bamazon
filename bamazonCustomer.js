var prompt = require('prompt');
var mysql = require('mysql');
var table = require('./table')


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Kisses@12",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id" + connection.threadId);
});

connection.query("SELECT * FROM Products", function (err, res) {
    if (err) throw err;
})

console.log("Shop our selection...\n");

console.log('  ID  |      Product Name      |  Department Name  |   Price  | In Stock');
console.log('------------------------------------------------------------------------')

for (var i = 0; i < res.length; i++) {
    var itemID = res[i].ItemID + '';
    itemID = table("  ID  ", itemID);

    var productName = res[i].ProductName + '';
    productName = table("      Product Name      ", productName);

    var departmentName = res[i].DepartmentName + '';
    departmentName = table("  Department Name  ", departmentName);

    var price = '$' + res[i].Price.toFixed(2) + '';
    price = table("   Price  ", price);

    var quantity = res[i].StockQuantity + '';

    console.log(itemID + '|' + productName + '|' + departmentName + '|' + price + '|    ' + quantity);
}

prompt.start();

console.log('\nWhich item would you like to purchase?');
prompt.get(['buyItemID']), function (err, result) {

    var buyItemID = result.buyItemID;
    console.log('You picked Item # ' + buyItemID + '.');

    console.log('\nHow many would you like to purchase?')
    prompt.get(['buyItemQuanity'], function (err, result) {

        var buyItemQuanity = result.buyItemQuanity;
        console.log('You selected to purchase ' + buyItemID + ' of this item.');
        connection.query('SELECT StockQuantity FROM Products WHERE ?', [{ ItemID: buyItemID }], function (err, res) {
            if (err) throw err;

            if (res[0] == undefined) {
                console.log('Sorry... We found no items with Item ID "' + buyItemID + '"');
                connection.end();
            }

            else {
                var bamazonQuantity = res[0].StockQuantity;

                if (bamazonQuantity >= buyItemQuantity) {

                    var newInventory = parseInt(bamazonQuantity) - parseInt(buyItemQuantity);
                    connection.query('UPDATE Products SET ? WHERE ?', [{ StockQuantity: newInventory }, { ItemID: buyItemID }], function (err, res) {
                        if (err) throw err;
                    });

                    var customerTotal;
                    connection.query('SELECT Price FROM Products WHERE ?', [{ ItemID: buyItemID }], function (err, res) {

                        var buyItemPrice = res[0].Price;
                        customerTotal = buyItemQuantity * buyItemPrice.toFixed(2);

                        console.log('\nYour total is $' + customerTotal + '.');
                    });
                };
            };
