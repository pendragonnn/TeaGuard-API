const diseaseRepository = require("../repository/diseases.repository");
// const diseaseService = require("../service/diseases.service")

class diseaseController {
    async getAllDiseases(req, res) {
        try {
            const diseases = await diseaseRepository.getAllDisease();
            
            res.status(200).json({
                status: true,
                message: "Diseases retrieved successfully",
                data: diseases
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }

    async getDiseaseById(req, res) {
        const id = req.params.id;

        try {
            const disease = await diseaseRepository.getDiseaseById(id);
        
            if (!disease) {
                return res.status(404).json({
                    status: false,
                    message: "disease not found!"
                });
            }

            res.status(200).json({
                status: true,
                message: "disease found",
                data: disease
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }
    
    async createDisease(req, res) {
        const dataDisease = req.body;
        
        try {
            const newDisease = await diseaseRepository.createDisease(dataDisease);
            
            res.status(201).json({
                status: true,
                message: "Disease created successfully",
                data: newDisease
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }
    async updateDisease(req, res) {
        const id = req.params.id;
        const dataDisease = req.body;

        try {
            const updatedDisease = await diseaseRepository.updateDisease(id, dataDisease);
            
            res.status(200).json({
                status: true,
                message: "Disease updated successfully",
                data: updatedDisease
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }

    async deleteDisease(req, res) {
        const id = req.params.id;

        try {
            const deletedDisease = await diseaseRepository.deleteDisease(id);
            
            res.status(200).json({
                status: true,
                message: "Disease deleted successfully",
                data: deletedDisease
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }
}

module.exports = new diseaseController();