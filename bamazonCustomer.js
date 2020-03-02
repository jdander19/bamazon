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

    afterConnection();
    selectProducts();
});

function afterConnection() {
    connection.query("SELECT * FROM Products", function (err, res) {
    if (err) throw err;
       for (let i = 0; i <res.length ; i++) {
           console.log(res[i].product_name, res[i].id);
           
       };
        connection.end()
    });
}

function selectProducts(inventory) {
    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "What is the ID of the product you would like to buy?\n",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            },
        },
        {
            name: "quantity",
            type: "input",
            message: "How many units of this product would you like to buy?\n",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            },
        },
    ]).then(function (answer) {
        console.log("Checking product stock...\n");
        var chosenProduct = answer.id;
 
        if (chosenProduct) {
            if (chosenProduct.stock_quantity >= parseInt(answer.quantity)) {
              connection.query(
                "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
                [
                  answer.quantity, chosenProduct.item_id
                ],
                function (err, res) {
                  if (err) throw err;
                  console.log("Thank you for purchasing" + chosenProduct.product_name + ". You have purchased " + answer.quantity);
                  startOver()
                }
              );
            } else {
              console.log("Insuficent Quantity!");
              startOver()
            };
          };
    });
}
