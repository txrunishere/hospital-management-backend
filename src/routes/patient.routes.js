const { Router } = require('express');

const {
  homePage,
  createPatientProfile
} = require("../controllers/patient.controller.js");
const router = Router();

router.route("/").get(homePage);
router.route("/create-patient").post(
  createPatientProfile
)

module.exports = router;