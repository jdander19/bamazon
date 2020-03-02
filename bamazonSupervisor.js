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

    runSup();
});


function runSup() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View Product Sales by Department",
                "Create New Department",
            ]
        }).then(function (answer) {
            switch (answer.action) {
                case "View Product Sales by Department":
                    displayDepartments()
                
                case "Create New Department":
                    addDepartment()
            };
        });
};

function displayDepartments() {
    console.log("Selecting all Departments...\n");
    connection.query("SELECT * FROM Departments", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("ID: " + res[i].item_id + " | " + "Department: " + res[i].department_name + " | " + "Over Head Costs: " + res[i].over_head_costs + " | " + "Product Sales: " + res[i].product_sales + " | " + "Total Profit: " + res[i].total+profit);
            console.log('------------------------------------------------------------------------------------------------------------');
        };
        runSup()
    });
};

