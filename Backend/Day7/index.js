const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Ansh");
});

app.get("/ab+cd", (req, res) => {
  res.send("abcd");
  console.log(req.query);
});

app.listen(5000);
