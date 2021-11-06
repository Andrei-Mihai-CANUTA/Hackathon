const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {});

app.get("/register", (req, res) => {
  // send data to database
  // validation
});

app.listen(port, () => {
  console.log("Listenning in port 3000..");
});
