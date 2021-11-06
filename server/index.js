const express = require("express");
const app = express();
const port = 4000;
const database = require("./database.js")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const query = `
INSERT INTO users (username, password)
VALUES ('&1', $2)`;


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  console.log(req.body.username);
  console.log(req.body.password);
  res.send("User logged in ");
});

app.post("/register", (req, res) => {

  database.query(query, [req.body.username], [req.body.password]);
  console.log(req.body);
  console.log(req.body.username);
  console.log(req.body.password);
  console.log(req.body.repeat_password);
  

  if(req.body.password == req.body.repeat_password){
    res.send("User registered! ");
}
  else{
    res.send("No match between passwords! ");
  }

});

app.listen(port, () => {
  console.log("Listenning in port 4000..");
});
