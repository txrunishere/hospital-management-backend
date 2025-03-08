const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connectionDataBase = await mongoose.connect(process.env.MONGODB_URI);
    console.log(
      "MongoDB Connection Success!!",
      connectionDataBase.connection.host,
      connectionDataBase.connection.name
    );
  } catch (error) {
    console.log("Database connection failed: ", error);
    process.exit(1);
  }
}

module.exports = { connectDB }