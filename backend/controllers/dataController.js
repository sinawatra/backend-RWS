const asyncHandler = require('express-async-handler')



//@desc get SoilMoisure data
//@routes  Get /api/SoilMoisure
//@access Private 
const getSoilMoisureData = asyncHandler(async(req, res) => {
    res.status(200).json({ message: 'Get SoilMoisure data' })
})

//@desc set SoilMoisure data
//@routes  Post /api/SoilMoisure
//@access Private 
const setSoilMoisureData = asyncHandler(async(req, res) => {
    if (!req.body.float) {
        res.status(400)
        throw new Error('Please add a float field')
    } else {
        res.status(200).json({ message: 'Create SoilMoisure data' })
    }
})

module.exports = {
    getSoilMoisureData,
    setSoilMoisureData,
}
