const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

app.use(routes);

//database

// const databaseUri = "mongodb://localhost:27017/googlebooks";

// if (process.env.MONGODB_URI) {

//   mongoose.connect(process.env.MONGODB_URI)
// } else {
//   mongoose.connect(databaseUri)
// }

// const db = mongoose.connection;

// db.on('error', function(err){
//   console.log("Mongoose error : ", err)
// })

// db.once('open', function(err){
//   console.log("Mongoose connection sucessful!")
// });

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});



