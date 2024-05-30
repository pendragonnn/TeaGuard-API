const { disease } = require("../../models")

class diseaseRepository {
    
    async getAllDisease() {
        try {
            const diseases = await disease.findAll();
            return diseases
        } catch (error) {
            throw error
        }
    }
    async getDiseaseById(id) {
        try {
            console.log(id)
            const diseaseData = await disease.findByPk(id);
            return diseaseData;
        } catch (error) {
            throw error;
        }
    }

    async createDisease(dataDisease) {
        try {
            const newdisease = await disease.create(dataDisease);
            return newdisease;
        } catch (error) {
            throw error;
        }
    }

    async updateDisease(id, datadisease) {
        try {
            const diseaseData = await disease.findByPk(id);

            if (!diseaseData) {
                throw new Error('Disease not found');
            }
            await diseaseData.update(datadisease);
            return diseaseData;
        } catch (error) {
            throw error;
        }
    }

    async deleteDisease(id) {
        try {
            const diseaseData = await disease.findByPk(id);

            if (!diseaseData) {
                throw new Error('Disease not found');
            }
            await diseaseData.destroy();
            return diseaseData;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new diseaseRepository();