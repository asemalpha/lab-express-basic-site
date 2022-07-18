const express = require("express");
const PORT = 3000;

const app = express();

app.get("/", (request, response) => {
  response.links({
    home: "/",
    about: "views/about.html",
    works: "works.html",
  });
  response.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works.html");
});

app.listen(PORT, () => {
  console.log("Running Geoffrey away");
});
