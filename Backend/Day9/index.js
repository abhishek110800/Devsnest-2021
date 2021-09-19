const express = require("express");
const path = require("path");

const app = express();

app.use("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/hello.txt"), "text.txt");

  // res
  //   .status(201)
  //   .cookie("token", "test", {
  //     expires: new Date(Date.now() + 4 * 3600000),
  //   })
  //   .status(301)
  //   .cookie("hello", "yesss!")
  //   .redirect(301, "/admin");
});

app.listen(5000);
