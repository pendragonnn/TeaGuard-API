const DiseaseDetailRepository = require('../repository/diseaseDetail.repository');

class DiseaseDetailController {

    async getAllDiseaseDetails(req, res) {
        try {
            const diseaseDetails = await DiseaseDetailRepository.getAllDiseaseDetails();
            res.status(200).json(diseaseDetails);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getDiseaseDetailById(req, res) {
        try {
            const { id } = req.params;
            const diseaseDetailData = await DiseaseDetailRepository.getDiseaseDetailById(id);
            if (!diseaseDetailData) {
                return res.status(404).json({ error: "Disease detail not found" });
            }
            res.status(200).json(diseaseDetailData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createDiseaseDetail(req, res) {
        try {
            const { id, diseaseName, diseaseExplanation, diseasePrevention, diseaseRecommendation } = req.body;
            const diseaseImgPreview = req.files['diseaseImgPreview'][0].path;
            const diseaseImgDetail = req.files['diseaseImgDetail'][0].path;

            const newDiseaseDetail = await DiseaseDetailRepository.createDiseaseDetail({
                id,
                diseaseName,
                diseaseImgPreview,
                diseaseImgDetail,
                diseaseExplanation,
                diseasePrevention,
                diseaseRecommendation
            });

            res.status(201).json(newDiseaseDetail);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateDiseaseDetail(req, res) {
        try {
            const { id } = req.params;
            const data = req.body;
            if (req.files && req.files['diseaseImgPreview']) {
                data.diseaseImgPreview = req.files['diseaseImgPreview'][0].path;
            }
            if (req.files && req.files['diseaseImgDetail']) {
                data.diseaseImgDetail = req.files['diseaseImgDetail'][0].path;
            }

            const updatedDiseaseDetail = await DiseaseDetailRepository.updateDiseaseDetail(id, data);
            if (!updatedDiseaseDetail) {
                return res.status(404).json({ error: "Disease detail not found" });
            }

            res.status(200).json(updatedDiseaseDetail);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async deleteDiseaseDetail(req, res) {
        try {
            const { id } = req.params;
            await DiseaseDetailRepository.deleteDiseaseDetail(id);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new DiseaseDetailController();
