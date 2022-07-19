const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/finalexam");

const db = mongoose.connection;

db.on("error", () => {
  console.log("** Error in database connection");
});

db.once("open", () => {
  console.log("connected to database");
});
