require("dotenv").config()
const { connectDB } = require("./config/index.db.js");
const { app } = require('./app.js');

connectDB()
.then(
  app.listen(process.env.PORT || 8080, () => {
    console.log(`App is listing on PORT: ${process.env.PORT || 8080}`);
  })
)
.catch((error) => {
  console.log("MongoDB connection ERROR: ", error);
})