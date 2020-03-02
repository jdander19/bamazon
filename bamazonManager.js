var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "passwordpassword",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

    runSearch();
});

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View Products for Sale",
                "Add to Inventory",
            ]
        }).then(function (answer) {
            switch (answer.action) {
                case "View Products for Sale":
                    displayProducts()
                
                case "Add to Inventory":
                    addInventory()
            };
        });
};

function displayProducts() {
    console.log("Selecting all Products...\n");
    connection.query("SELECT * FROM Products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "Quantity: " + res[i].stock_quantity);
            console.log('------------------------------------------------------------------------------------------------------------');
        };
        runSearch()
    });
};

function addInventory() {
    inquirer
        .prompt([
            {
                name: "input",
                type: "list",
                message: "Please choose the ID of item.\n",
                choices: function () {
                    var choiceArray = [];
                    for (i = 0; i < data.length; i++) {
                        choiceArray.push(data[i].item_id);
                    };
                    return choiceArray;
                },
            },
            {
                name: "input",
                type: "quantity",
                message: "How many of item would you like to add?"
            }
        ]).then(function (answer) {

            var chosen;
            connection.query("SELECT * FROM Products", function (err, res) {
                if (err) throw err;
                console.log("Selecting Inventory.\n");

                for (var i = 0; i < res.length; i++) {
                    if (data[i].item_id === answer.addInventory) {
                        chosen = data[i];
                    };
                };
            });
            connection.query("UPDATE bamazon SET ? WHERE ?", function (err, res) {
                if (err) throw err;
                console.log("Updating Inventory.\n");

                Array.push("ID: " + res[i].item_id + " | " + "Product: " + res[i].product_name + " | " + "Department: " + res[i].department_name + " | " + "Price: " + res[i].price + " | " + "Quantity: " + res[i].stock_quantity);
                console.log('------------------------------------------------------------------------------------------------------------');

            });

        })
};