const express = require('express')
const router = express.Router()
const {getSoilMoisureData, setSoilMoisureData} = require('../controllers/dataController')

router.route('/').get(getSoilMoisureData).post(setSoilMoisureData)

//router.get('/', getSoilMoisureData)

//router.post('/', setSoilMoisureData)

module.exports = router 