const { model, Schema } = require("mongoose");

const patientSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!!"],
      trim: true,
      lowercase: true
    },
    phone: {
      type: Number,
      required: [true, "Phone number is required!!"],
      trim: true,
      unique: true,
    },
    address: {
      type: String,
      required: [true, "Address is required!!"],
      trim: true
    },
    age: {
      type: Number,
      required: [true, "Age is required!!"]
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: [true, "Choose a Gender!!"]
    },
    bloodGroup: {
      type: String,
      enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
      required: [true, "Blood group is required!!"]
    },
    treatedBy: [
      {
        type: Schema.Types.ObjectId,
        ref: "Doctor"
      }
    ],
    visitHospitals: [
      {
        type: Schema.Types.ObjectId,
        ref: "Hospital"
      }
    ],
    admittedIn: {
      type: Schema.Types.ObjectId,
      ref: "Hospital"
    },
    medicalRecords: {
      type: Schema.Types.ObjectId,
      ref: "MedicalRecord"
    }
  },
  { timestamps: true }
)

const Patient = model("Patient", patientSchema);

module.exports = { Patient }