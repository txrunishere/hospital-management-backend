const { model, Schema } = require('mongoose');

const medicalRecordSchema = new Schema(
  {
    patientId: {
      type: Schema.Types.ObjectId,
      ref: "Patient"
    },
    diagnosis: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    examinedAt: {
      type: Date,
      required: true
    }
  },
  { timestamps: true }
)

const MedicalRecord = model("MedicalRecord", medicalRecordSchema);

module.exports = { MedicalRecord }