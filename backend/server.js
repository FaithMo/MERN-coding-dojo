// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// require("dotenv").config();

// const app = express();
// const port = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   // useCreateIndex: true
// });

// const connection = mongoose.connection;
// connection.once("open", () => {
//   console.log("MongoDB connected!!");
// });

// app.listen(port, () => {
//   console.log(`sever is running on port: ${port}`);
// });

const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const mongoose = require("mongoose");
const user = require("./routes/user.js");
const express = require("express");
const app = express();

require("dotenv").config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  // useCreateIndex: true
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected!!");
});
app.use(express.json());
app.use("/", user);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
