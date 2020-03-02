DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE Products (
  id INT NOT NULL AUTO_INCREMENT,
  item_id VARCHAR (40) NULL,
  product_name VARCHAR (40) NULL,
  department VARCHAR (40) NULL,
  price VARCHAR(40) NULL,
  stock_quantity VARCHAR(40) NULL,
  PRIMARY KEY (id)
);

INSERT INTO Products (item_id, product_name, department, price, stock_quantity)
VALUES (2938475, "toilet paper", "Bath", 7.89, 150 );

INSERT INTO Products (item_id, product_name, department, price, stock_quantity)
VALUES (0028834, "razors", "Bath", 4.56, 80 );

INSERT INTO Products (item_id, product_name, department, price, stock_quantity)
VALUES (2456128, "pillow cases", "Bed", 2.10, 74 );

INSERT INTO Products (item_id, product_name, department, price, stock_quantity)
VALUES (6420896, "tv remote", "electronics", 3.65, 96 );

INSERT INTO Products (item_id, product_name, department, price, stock_quantity)
VALUES (1683753, "crock pot", "kitchen", 39.95, 25 );

INSERT INTO Products (item_id, product_name, department, price, stock_quantity)
VALUES (9385753, "cutting knives set", "kitchen", 18.75, 37);

INSERT INTO Products (item_id, product_name, department, price, stock_quantity)
VALUES (6849020, "bluetooth earphones", "electronics", 207.89, 29 );

INSERT INTO Products (item_id, product_name, department, price, stock_quantity)
VALUES (2033100, "thermos", "kitchen", 17.88, 41);

INSERT INTO Products (item_id, product_name, department, price, stock_quantity)
VALUES (0993566, "door mat", "home living", 14.76, 10 );

INSERT INTO Products (item_id, product_name, department, price, stock_quantity)
VALUES (223455, "phone case", "electronics", 10.44, 60 );

INSERT INTO Products (item_id, product_name, department, price, stock_quantity)
VALUES (829334, "animal cage", "pets", 67.30, 8 );

INSERT INTO Products (item_id, product_name, department, price, stock_quantity)
VALUES (357310, "fertilizer", "gardening", 14.57, 53 );


CREATE TABLE Departments (
  id INT NOT NULL AUTO_INCREMENT,
  department_id VARCHAR (40) NULL,
  department_name VARCHAR (40) NULL,
  over_head_costs VARCHAR (40) NULL,
  product_sales VARCHAR (40) NULL,
  total_profit VARCHAR (40) NULL,
  PRIMARY KEY (id)
);


INSERT INTO Departments (department_id, department_name, over_head_costs, product_sales, total_profit)
VALUES ( 1001, "Bath", 2000, 3000, 1000 );

INSERT INTO Departments (department_id, department_name, over_head_costs, product_sales, total_profit)
VALUES ( 1002, "electronics", 5000, 8000, 3000 );

INSERT INTO Departments (department_id, department_name, over_head_costs, product_sales, total_profit)
VALUES ( 1005, "bed", 6500, 3000, "-3500");

INSERT INTO Departments (department_id, department_name, over_head_costs, product_sales, total_profit)
VALUES ( 1008, "kitchen", 4500, 4000, "-500");