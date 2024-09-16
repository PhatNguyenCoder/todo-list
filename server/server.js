const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/todo_list";
const bodyParser = require("body-parser");
const cors = require("cors");
const todo = require("./router/todo.router");
const app = express();
const port = 3001;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/", todo);

app.get("/", (req, res) => res.send("Hello World!"));

mongoose.connect(url);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
