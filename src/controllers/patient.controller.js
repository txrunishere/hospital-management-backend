const { ApiError } = require("../utils/ApiError.js");
const { ApiResponse } = require("../utils/ApiResponse.js");
const { Patient } = require("../models/patient.model.js");
const asyncHandler = require("express-async-handler");


const homePage = asyncHandler(async (req, res) => {
  return res.send(
    {
      name: "Tarun",
      age: 18
    }
  );
})

module.exports = {
  homePage
}