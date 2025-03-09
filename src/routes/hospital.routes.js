const { Router } = require('express');
const {
  registerHospital
} = require("../controllers/hospital.controller.js");
const router = Router();


router.route("/register").post(registerHospital);

module.exports = router