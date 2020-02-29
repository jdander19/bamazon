var mysql = require("mysql");

var connection = mysql.createConnection({
    hoste: "localhost",

    port: 3306,

    user: "root",

    password: "passwordpassword",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    displayProducts()


    afterConnection();
  });

function afterConneciton() {
    connection.query("SELECT * FROM Products", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end()
    });
}