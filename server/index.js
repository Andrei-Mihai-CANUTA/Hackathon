const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  // get user name and password
  console.log(req.body);
  console.log(req.body.name);
  console.log(req.body.password);
  res.send("User logged in ");
});

app.get("/register", (req, res) => {
  // send data to database
  // validation
});

app.listen(port, () => {
  console.log("Listenning in port 4000..");
});
