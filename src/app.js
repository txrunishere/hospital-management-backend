const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(cookieParser());


// Import Routes


module.exports = { app }