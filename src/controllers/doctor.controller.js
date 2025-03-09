const { ApiError } = require("../utils/ApiError.js");
const { ApiResponse } = require("../utils/ApiResponse.js");
const { Doctor } = require("../models/doctor.model.js");
const { Hospital } = require("../models/hospital.model.js");
const asyncHandler = require("express-async-handler");
const { logger } = require("../utils/logging.js");


const createDoctor = asyncHandler(async (req, res) => {
  // TODO: Complete create doctor route and ensure any not everyone apply for this role
  const { name, phone, experience, qualification } = req.body;

  if (
    [name, phone, experience, qualification].some((f) => String(f).trim() === "")
  ) {
    throw new ApiError(400, "All Fields are required!!")
  }

  if (String(phone).length !== 10) {
    throw new ApiError(400, "Enter a valid Number")
  }

  const doesDoctorExists = await Doctor.findOne({ phone })
  if (doesDoctorExists) { throw new ApiError(409, "Phone Number registered!!") }

  logger.info(`New request for Register Doctor ${name}`);

  const doctor = await Doctor.create(
    {
      name,
      phone,
      experience,
      qualification
    }
  )

  if (doctor) {
    return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { doctor },
        `Doctor ${name} register successfully!!`
      )
    )
  } else {
    throw new ApiError(404, "Doctor not Registered")
  }

})

module.exports = {
  createDoctor
}