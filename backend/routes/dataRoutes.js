const express = require('express')
const router = express.Router()
const {getSoilMoistureData, setSoilMoistureData} = require('../controllers/dataController')

router.route('/').get(getSoilMoistureData).post(setSoilMoistureData)

//router.get('/', getSoilMoisureData)

//router.post('/', setSoilMoisureData)

module.exports = router 