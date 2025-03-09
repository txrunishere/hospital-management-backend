const { Schema, model } = require("mongoose");

const doctorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!!"],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: Number,
      required: [true, "Phone number is required!!"],
      trim: true
    },
    experience: {
      type: Number,
      default: 1
    },
    qualification: {
      type: String,
      required: true
    },
    workingIn: {
      type: Schema.Types.ObjectId,
      ref: "Hospital"
    }
  },
  { timestamps: true }
);

const Doctor = model("Doctor", doctorSchema);

module.exports = { Doctor }