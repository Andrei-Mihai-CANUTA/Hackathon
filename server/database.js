const { Pool, Client } = require("pg");

const client = new Pool({
  host: "localhost",
  user: "postgres",
  password: "22042002qwe",
  port: 5432,
  database: "Hackaton"
});

//client.connect();

//client.query('INSERT INTO users (username) VALUES ($1)',['Alex'])

/*client.query('SELECT * FROM users', (err, res)=>{
    if(!err){
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end;
})*/

module.exports = client;


