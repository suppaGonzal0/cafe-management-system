const express = require('express');
const mysql = require("mysql");
const cors = require("cors");

// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.urlencoded({
  extended: true
}));

app.use(session({
  key: "user",
  secret: "CSE370",
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 60*60*24,
  },
}));

const port= 3001;

const db = mysql.createPool({
  user: "root",
  host: "localhost",
  password: "1234",
  database: "cafe_management_system"
});

app.post("/register", (req, res) => {

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "insert into user (username, email, password) values (?,?,?)",
    [username, email, password],
    (err, result) => {
      if (err) {
        res.send({ message: "Email already exists!" });
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/login", (req, res) => {

  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "select * from user where email =? and password =?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({err: err});
      }
      if (result.length > 0) {
        req.session.user = result;
        console.log(req.session.user);
        res.send(result);
      } else {
        res.send({ message: "Wrong username/password!" });
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});