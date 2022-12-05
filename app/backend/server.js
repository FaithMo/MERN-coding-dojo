const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const user = require("./routes/user.js");
const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
// app.all("/*", function (req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
// });
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  // useCreateIndex: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected!!");
});

app.use(cors());
app.use(express.json());
app.use("/", user);
// app.get("/", (res) => {
//   res.header("Access-Control-Allow-Origin", "*");
// });

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
