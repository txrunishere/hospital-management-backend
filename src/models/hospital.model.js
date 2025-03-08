const { Schema, model } = require("mongoose");

const hospitalSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Hospital name is required!!"],
      trim: true
    },
    address: {
      type: String,
      required: [true, "Address is required!!"],
      trim: true
    },
    city: {
      type: String,
      required: [true, "City is required!!"],
      trim: true
    },
    number: {
      type: Number,
      required: [true, "Contact number is required!!"]
    },
    pincode: {
      type: String,
      required: [true, "Pincode is required!!"],
      trim: true
    },
    specialization: {
      type: String,
      required: [true, "Specialization is required!!"],
      trim: true
    },
    doctors: [{
      type: Schema.Types.ObjectId,
      ref: "Doctor"
    }]
  },
  { timestamps: true }
);

const Hospital = model("Hospital", hospitalSchema);

module.exports = { Hospital }