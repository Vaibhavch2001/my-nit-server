const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();


app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models/index.js");
db.sequelize.sync();
db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my application." });
});
app.use("/pastPapers",require("./routes/pastPapers.js"));
app.use("/notes", require("./routes/document.js"));
app.use("/subjects", require("./routes/subject.js"));
app.use("/slides",require("./routes/slides.js"));
app.use("/books",require("./routes/books.js"));
app.use("/login", require("./routes/user.js"));

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});