const { Router } = require('express');
const {
  homePage
} = require("../controllers/patient.controller.js");
const router = Router();

router.route("/home").get(homePage);

module.exports = router;