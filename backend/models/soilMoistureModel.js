const mongoose = require("mongoose");

const soilMoistureSchema = mongoose.Schema(
  {
    SoilMoistureData: {
      type: Number,
      required: true,
    },
    SoilMoistureData2: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true // This adds `createdAt` and `updatedAt` fields
  }
);

module.exports = mongoose.model("SoilMoisture", soilMoistureSchema);
