const express = require("express")
const diseaseController = require("../controller/diseases.controller")
const { diseaseValidator } = require("../middleware/request.validator")
const router = express.Router()

router.get('/', diseaseController.getAllDiseases)
router.get('/:id', diseaseController.getDiseaseById)
router.post('/', diseaseValidator, diseaseController.createDisease)
router.put('/:id', diseaseController.updateDisease)
router.put('/:id', diseaseController.deleteDisease)

module.exports = router