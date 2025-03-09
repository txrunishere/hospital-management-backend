const { ApiError } = require("../utils/ApiError.js");
const { ApiResponse } = require("../utils/ApiResponse.js");
const { Patient } = require("../models/patient.model.js");
const asyncHandler = require("express-async-handler");
const { logger } = require("../utils/logging.js");


const homePage = asyncHandler(async (req, res) => {
  return res.send(
    {
      name: "Tarun",
      age: 18
    }
  );
})

const createPatientProfile = asyncHandler(async (req, res) => {
  const { name, phone, address, age, gender, bloodGroup } = req.body;

  if (
    [name, phone, address, age, gender, bloodGroup].some((field) => String(field).trim() === "")
  ) {
    throw new ApiError(400, "All Fields are required!!")
  }

  // FIXME: How to check that phone number has 10 digits -- { DONE }
  if (String(phone).length !== 10) {
    throw new ApiError(400, "Enter a valid Number")
  }

  const userExists = await Patient.findOne({phone});
  if (userExists) {
    throw new ApiError(409, "Phone Number registered!!")
  }

  logger.info(`New register request of ${name}`);

  const user = await Patient.create(
    {
      name,
      phone,
      address,
      age,
      gender,
      bloodGroup
    }
  );

  if(user) {
    logger.info(`Patient request for ${name} success!!`)
    return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { user },
        "Patient created successfully!!"
      )
    )
  } else {
    throw new ApiError(404, `Patient - ${name} not Created!!`)
  }

});

module.exports = {
  homePage,
  createPatientProfile
}