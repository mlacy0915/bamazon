DROP DATABASE IF products.sql;
CREATE DATABASE products.sql

USE animals_db;

CREATE TABLE Products(
    item_id VARCHAR(),
    product_name VARCHAR(),
    department_name VARCHAR(),
    price INTEGER(),
    stock_quantity INTEGER(),
) 