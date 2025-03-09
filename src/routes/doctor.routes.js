const { Router } = require('express');
const {
  createDoctor
} = require("../controllers/doctor.controller.js");
const router = Router();


router.route("/create-doctor").post(createDoctor);

module.exports = router