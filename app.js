const express = require("express");

const app = express();

//middleware that serves files from the /public folder

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/public/views/works.html");
});

app.listen(3000, () => {
  console.log("server is running!");
});
