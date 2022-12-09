const express = require("express");
const app = express();
const port = 3000;

const dbConfig = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(dbConfig);

const sql = `INSERT INTO people(name) VALUES('Mikkaiser');`;
connection.query(sql);
connection.end;

app.get("/", (req, res) => {
  res.send("<h1>Hello From Mikkaiser</h1>");
});

app.listen(port, () => {
  console.log("Running on port" + port);
});
