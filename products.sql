CREATE DATABASE products.sql

USE products.sql;

CREATE TABLE Products(
    item_id INTEGER AUTO_INCREMENT ,
    product_name VARCHAR(30),
    department_name VARCHAR(30),
    price INTEGER(10),
    stock_quantity INTEGER(300),
	PRIMARY KEY (item_id)
    );
 

INSERT INTO Products(product_name, department_name, price, stock_quantity)
VALUES ("iPad Pro", "electronics", 999.99, 100 );

INSERT INTO Products(product_name, department_name, price, stock_quantity)
VALUES("Christian Louboutin-Marie Jane Bag", "accesories", 2590.00, 50);

INSERT INTO Products(product_name, department_name, price, stock_quantity)
VALUES("Kate Spade Smart Watch", "accesories", 165.00, 33 );

INSERT INTO Products(product_name, department_name, price, stock_quantity)
VALUES("Game of Thrones Complete Set", "Blu-ray", 249.99, 78);

INSERT INTO Products(product_name, department_name, price, stock_quantity)
VALUES("Bad Girl Throughout History", "books", 13.58, 217);

INSERT INTO Products(product_name, department_name, price, stock_quantity)
VALUES("Super Nintendo", "electronics", 149.99, 63);

INSERT INTO Products(product_name, department_name, price, stock_quantity)
VALUES("CoCo & Co Coconut Oil", "beauty", 39.99, 52);

INSERT INTO Products(product_name, department_name, price, stock_quantity)
VALUES("Vegan Vitamin D3", "health", 14.95, 14);

INSERT INTO Products(product_name, department_name, price, stock_quantity)
VALUES("Capital City Mambo Sauce", "grocery", 13.00, 30);

INSERT INTO Products(product_name, department_name, price, stock_quantity)
VALUES("Little Seeds Piper Crib", "baby", 350.00, 36);


