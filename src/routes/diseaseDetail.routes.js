const express = require('express');
const router = express.Router();
const DiseaseDetailController = require('../controller/disesaseDetail.controller');
const uploadHandler = require('../middleware/image.handler'); 

router.get('/', DiseaseDetailController.getAllDiseaseDetails);
router.get('/:id', DiseaseDetailController.getDiseaseDetailById);
router.post('/', uploadHandler.fields([
    { name: 'diseaseImgPreview', maxCount: 1 },
    { name: 'diseaseImgDetail', maxCount: 1 }
]), DiseaseDetailController.createDiseaseDetail);

router.put('/:id', uploadHandler.fields([
    { name: 'diseaseImgPreview', maxCount: 1 },
    { name: 'diseaseImgDetail', maxCount: 1 }
]), DiseaseDetailController.updateDiseaseDetail);
router.delete('/:id', DiseaseDetailController.deleteDiseaseDetail);

module.exports = router;
