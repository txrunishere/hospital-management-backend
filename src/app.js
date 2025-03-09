const express = require("express");
const { logger } = require("./utils/logging.js");
const morgan = require('morgan');
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(cookieParser());


const morganFormat = ":method :url :status :response-time ms";

app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  })
);

// Import Routes
const patientRoute = require("./routes/patient.routes.js");
const doctorRoute = require("./routes/doctor.routes.js");


app.use("/api/v1/patient", patientRoute);
app.use("/api/v1/doctor", doctorRoute);

module.exports = { app }