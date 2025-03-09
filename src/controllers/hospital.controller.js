const { ApiError } = require("../utils/ApiError.js");
const { ApiResponse } = require("../utils/ApiResponse.js");
const { Hospital } = require("../models/hospital.model.js");
const asyncHandler = require("express-async-handler");
const { logger } = require("../utils/logging.js");
const { checkFields } = require("../utils/checkFields.js");


const registerHospital = asyncHandler(async (req, res) => {
  const { name, address, city, phone, pincode, specialization } = req.body;

  checkFields(name, address, city, phone, pincode, specialization);

  if (String(phone).trim() !== 10) {
    throw new ApiError(400, "Enter a valid Phone Number!!")
  }

  logger.info(`New register request for Hospital ${name}`);

  const hospital = await Hospital.create(
    {
      name,
      address,
      city,
      phone,
      pincode,
      specialization
    }
  )

  if (hospital) {
    return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { hospital },
        `${name} registered successfully!!`
      )
    )
  } else {
    throw new ApiError(404, "Hospital registeration failed!!")
  }

})

module.exports = {
  registerHospital
}