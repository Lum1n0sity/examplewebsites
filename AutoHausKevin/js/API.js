const express = require('express');
const cors = require('cors');
const app = express();
const odbc = require('odbc');
const PORT = 8080;

app.options('/login', cors({
    origin: 'http://127.0.0.1:49358',
    methods: ['POST', 'GET', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectionString = 'Driver={Microsoft Access Driver (*.mdb, *.accdb)};Dbq=C:\\Users\\lukas\\OneDrive\\Desktop\\InDesktop\\WebsiteCode\\AutoHausKevin\\js\\Testdb.accdb;';

let connection;
odbc.connect(connectionString, (err, conn) => {
  if (err) {
    console.error(err);
    return;
  }
  connection = conn;
});

app.post('/login', (req, res) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:49358');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  const username = req.body.username;
  const password = req.body.password;

  console.log(`Received data: name=${username}, password=${password}`);

  const query_login_pw = `SELECT COUNT(*) as count FROM MainAccount WHERE Password = '${password}'`;

  connection.query(query_login_pw, function (err, result) {
    if (err) {
        console.error(err);
        return;
    }
    if (result.length > 0) {
        const count = result[0].count;
        if (count > 0) {
            console.log(`The password: ${password} exists in the table.`);
        } else {
            console.log(`The password: ${password} don't exists in the table.`);
            pw_error_exists_db = true;
            console.log(pw_error_exists_db);
        }
    } else {
        console.log(`An error occurred while executing the query.`);
    }
    
    connection.close(function (err) {
        if (err) {
            console.error(err);
        } else {
            console.log('Connection closed successfully');
        }
    });
  });
  console.log(`Received data: name=${username}, password=${password}`);

    res.status(200).send({ message: 'Login success'});
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});