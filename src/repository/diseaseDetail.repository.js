const { diseaseDetail } = require("../../models")

class DiseaseDetailRepository {

    async getAllDiseaseDetails() {
        try {
            const diseaseDetails = await diseaseDetail.findAll();
            return diseaseDetails;
        } catch (error) {
            throw error;
        }
    }

    async getDiseaseDetailById(id) {
        try {
            const diseaseDetailData = await diseaseDetail.findByPk(id);
            return diseaseDetailData;
        } catch (error) {
            throw error;
        }
    }

    async createDiseaseDetail(data) {
        try {
            const newDiseaseDetail = await diseaseDetail.create(data);
            return newDiseaseDetail;
        } catch (error) {
            throw error;
        }
    }

    async updateDiseaseDetail(id, data) {
        try {
            const updatedDiseaseDetail = await diseaseDetail.update(data, {
                where: { id },
                returning: true,
                plain: true
            });
            return updatedDiseaseDetail[1];
        } catch (error) {
            throw error;
        }
    }

    async deleteDiseaseDetail(id) {
        try {
            await diseaseDetail.destroy({
                where: { id }
            });
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new DiseaseDetailRepository();
