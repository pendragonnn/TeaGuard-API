const DiseaseDetailRepository = require('../repository/diseaseDetail.repository');
const fs = require('fs');
const path = require('path');

class DiseaseDetailController {
    async getAllDiseaseDetails(req, res) {
        try {
            const diseaseDetails = await DiseaseDetailRepository.getAllDiseaseDetails();
            res.status(200).json({
                status: true,
                message: "Disease details retrieved successfully",
                data: diseaseDetails
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: "Internal server error while retrieving disease details",
                error: error.message
            });
        }
    }

    async getDiseaseDetailById(req, res) {
        try {
            const { id } = req.params;
            const diseaseDetailData = await DiseaseDetailRepository.getDiseaseDetailById(id);
            if (!diseaseDetailData) {
                return res.status(404).json({
                    status: false,
                    message: "Disease detail not found"
                });
            }
            res.status(200).json({
                status: true,
                message: "Disease detail retrieved successfully",
                data: diseaseDetailData
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: "Internal server error while retrieving disease detail by ID",
                error: error.message
            });
        }
    }

    async createDiseaseDetail(req, res) {
        try {
            const { id, diseaseName, diseaseExplanation, diseasePrevention, diseaseRecommendation } = req.body;

            const existingDisease = await DiseaseDetailRepository.getDiseaseDetailById(id);
            if (existingDisease) {
                return res.status(400).json({
                    status: false,
                    message: `Disease with ID ${id} already exists`
                });
            }
            const diseaseImgPreviewFile = req.files['diseaseImgPreview'][0].filename;
            const diseaseImgDetailFile = req.files['diseaseImgDetail'][0].filename;

            const newDiseaseDetail = await DiseaseDetailRepository.createDiseaseDetail({
                id,
                diseaseName,
                diseaseImgPreview: `/publics/${diseaseImgPreviewFile}`,
                diseaseImgDetail: `/publics/${diseaseImgDetailFile}`,
                diseaseExplanation,
                diseasePrevention,
                diseaseRecommendation
            });

            res.status(201).json({
                status: true,
                message: "Disease detail created successfully",
                data: newDiseaseDetail
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: "Internal server error while creating disease detail",
                error: error.message
            });
        }
    }

    async updateDiseaseDetail(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            
            const existingDiseaseDetail = await DiseaseDetailRepository.getDiseaseDetailById(id);
            if (!existingDiseaseDetail) {
                return res.status(404).json({
                    status: false,
                    message: "Disease detail not found"
                });
            }
    
            if (req.files && req.files['diseaseImgPreview']) {
                const oldImgPreviewPath = existingDiseaseDetail.diseaseImgPreview;
                if (oldImgPreviewPath) {
                    fs.unlinkSync(path.join(__dirname, '..', oldImgPreviewPath)); 
                }
                data.diseaseImgPreview = req.files['diseaseImgPreview'][0].path;
            }
            if (req.files && req.files['diseaseImgDetail']) {
                const oldImgDetailPath = existingDiseaseDetail.diseaseImgDetail;
                if (oldImgDetailPath) {
                    fs.unlinkSync(path.join(__dirname, '..', oldImgDetailPath)); 
                }
                data.diseaseImgDetail = req.files['diseaseImgDetail'][0].path;
            }
    
            const updatedDiseaseDetail = await DiseaseDetailRepository.updateDiseaseDetail(id, data);
            res.status(200).json({
                status: true,
                message: "Disease detail updated successfully",
                data: updatedDiseaseDetail
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: "Internal server error while updating disease detail",
                error: error.message
            });
        }
    }
    

    async deleteDiseaseDetail(req, res) {
        try {
            const { id } = req.params;
            const dataDisease = await DiseaseDetailRepository.getDiseaseDetailById(id);

            if (!dataDisease) {
                return res.status(404).json({
                    status: false,
                    message: "Disease detail not found"
                });
            }

            const imgPreview = dataDisease.diseaseImgPreview;
            const imgDetail = dataDisease.diseaseImgDetail;

            if (imgPreview) {
                fs.unlinkSync(path.join(__dirname, '..', imgPreview));
            }
            if (imgDetail) {
                fs.unlinkSync(path.join(__dirname, '..', imgDetail)); 
            }

            await DiseaseDetailRepository.deleteDiseaseDetail(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({
                status: false,
                message: "Internal server error while deleting disease detail",
                error: error.message
            });
        }
    }
}

module.exports = new DiseaseDetailController();