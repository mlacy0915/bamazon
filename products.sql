CREATE DATABASE products.sql

USE products.sql;

CREATE TABLE Products(
    item_id INTEGER AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(30),
    department_name VARCHAR(30),
    price INTEGER(),
    stock_quantity INTEGER(),
) 

INSERT INTO Products(product_name, department_name, price, stock_quantity)
VALUES ("iPad Pro," "electronics", 999.99, 100 ),
("Christian Louboutin-Marie Jane Bag", "accesories", 2590.00, 50),
("Kate Spade Smart Watch", "accesories", 165.00, 33 ),
("Game of Thrones Complete Set", "Blu-ray", 249.99, 78),
("Bad Girl Throughout History", "books", 13.58, 217),
("Super Nintendo", "electronics", 149.99, 63),
("CoCo & Co Coconut Oil", "beauty", 39.99, 52),
("Vegan Vitamin D3", "health", 14.95, 14),
("Capital City Mambo Sauce", "grocery", 13.00, 30),
("Little Seeds Piper Crib", "baby", 350.00, 36),



