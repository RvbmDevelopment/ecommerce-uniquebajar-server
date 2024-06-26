// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes");

const { ErrorController } = require("./createError/createError");
require("./config/db");
const { insertMultipleData } = require("./Data/InsertData/InsertData");
const fs = require("fs").promises;
const mysql = require("mysql2/promise");

require("dotenv").config({ path: "./.env" });
require("./config/db");
const app = express();

// Middleware
// app.use(bodyParser.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use(express.json());

// insertMultipleData()

// Routes
app.use("/api", router);

app.use(ErrorController);

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Server Is Running On PORT : ${PORT}`);
});
