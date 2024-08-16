const asyncHandler = require('express-async-handler');
const SoilMoisture = require("../models/soilMoistureModel");

//@desc get SoilMoisture data
//@routes  Get /api/SoilMoisture
//@access Private 
const getSoilMoistureData = async (req, res) => {
    const soilMoistureData = await SoilMoisture.find();
    res.json(soilMoistureData);
  }
//@desc set SoilMoisture data
//@routes  Post /api/SoilMoisture
//@access Private 
const setSoilMoistureData = asyncHandler(async (req, res) => {
    const { SoilMoistureData, SoilMoistureData2 } = req.body; 
    const soilMoisture = await SoilMoisture.create({
      SoilMoistureData,
      SoilMoistureData2,
    });
    res.status(201).json(soilMoisture);
  });

module.exports = {
    getSoilMoistureData,
    setSoilMoistureData,
}